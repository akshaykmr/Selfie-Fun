var getOriginalDimensions= function(){
	var img = new Image();
	img.src= Session.get('image');
	return {height: img.height, width: img.width};
};

var getDisplayDimensions= function(){
	var img=document.getElementById('display');
	return {height: img.clientHeight, width: img.clientWidth};
};

var convertStringDimensionsToNumber= function(face){
	face.height= parseInt(face.height);
	face.positionX= parseInt(face.positionX);
	face.positionY= parseInt(face.positionY);
	face.width= parseInt(face.width);
	return face;
};

var mapDimensions= function(face){
	var original = getOriginalDimensions();
	var display = getDisplayDimensions();
	var ratio = (original.height / display.height);

	face.height = Math.round(face.height/ratio);
	face.width = Math.round(face.width/ratio);
	face.positionX = Math.round(face.positionX/ratio);
	face.positionY = Math.round(face.positionY/ratio);

	return face;

};

var assignIndex= function(face,index){
	face.index=index;
	return face;
};


Template.faceTaggingOutput.helpers({
	'sessionImage': function(){
		var imageData= Session.get('image');
		if(!imageData){
			Router.go('/faceTagging');
		}else{
			return imageData;
		}
		
	}
});

Template.faceTaggingOutput.onCreated(function(){

	Faces.remove({});
	Session.set('gotResults',false);
	Session.set('selectedFace',false);
});

Template.faceTaggingOutput.onRendered(function(){
	IonLoading.show({backdrop: true});
	Meteor.call('fetchFaces',Session.get('image'),function(err,response){
		console.log(response);
		Session.set('gotResults',true);
		response.imageFaces
			.map(convertStringDimensionsToNumber)
			.map(mapDimensions)
			.map(assignIndex)
			.forEach(function(face){
				Faces.insert(face); //insert to client side collection
			});
			IonLoading.hide();
			if(Faces.find().count()===0){
				sAlert.warning('No faces found :(');
			}
	});
});

Template.faceTaggingOutput.helpers({
	gotResults: function(){
		return Session.get('gotResults');
	},
	face: function(){
		if(Session.get('gotResults')===false){
			return null;
		}else{
			return Faces.find().fetch();
		}
	},

	
	calculateHeight: function(){
		var context= Template.currentData();
		if(!context){
			return null;
		}else{
			return Math.round(context.height*0.25);
		}
	},
	calculateTop: function(){
		var context= Template.currentData();
		if(!context){
			return null;
		}else{
			return context.positionY - Math.round(context.height*0.30);
		}
	},
	calculateTopNameTag: function(){
		var context= Template.currentData();
		if(!context){
			return null;
		}else{
			return context.positionY + Math.round(context.height*0.30)+ context.height;
		}
	},
	
	genderDecorate: function(){
		var context= Template.currentData();
		if(context.gender.gender==='MALE'){
			return 'calm';
		}else{
			return 'assertive';
		}
	},

	waiting: function(){
		return !Session.get('gotResults');
	},

	selectedFace: function(){
		var faces = Faces.find().fetch();
		for(var i=0; i<faces.length; i++){
			var faceObject= faces[i];
			if(faceObject.index===Session.get('selectedFace'))
				return faceObject;
		}
	},
	subType: function(){
		var context=Template.currentData(); //identity of famous person
		var str= '';
		for(var i=0; i<identity.subType.length; i++){
			str= str+identity.subType[i] +' ';
		}
		return str;
	}
});

Template.faceTaggingOutput.events({
	'click .detected-face': function(){
		//console.log(this);  data context
		Session.set('selectedFace',this.index);
	
	},
	'click .editTag': function(){

	}
});