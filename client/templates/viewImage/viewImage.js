Template.viewImage.onCreated(function(){
	this.subscribe('trending');
	Session.set('selectedFace',null);
});

Template.viewImage.helpers({
	viewImage: function(){
		return Pictures.findOne(Session.get('viewImage')).src;
	}
});

Template.viewImage.helpers({
	face: function(){
			return Pictures.findOne(Session.get('viewImage')).faceList;
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

	selectedFace: function(){
		var faces = Pictures.findOne(Session.get('viewImage')).faceList;
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
	},
	notManyFaces: function(){ //becomes cluttered with too many faces
		return Pictures.findOne(Session.get('viewImage')).faceList.length<3;
	}
});

Template.viewImage.events({
	'click .detected-face': function(){
		//console.log(this);  data context
		Session.set('selectedFace',this.index);
	
	}
});