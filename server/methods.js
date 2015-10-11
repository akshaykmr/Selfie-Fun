//in a hurry
Meteor.methods({
	'fetchFaces': function(imageDataURI){

		var image= imageDataURI.slice(imageDataURI.indexOf('/9j')); //console log
		var imageBuffer= new Buffer(image,'base64');

		var wrappedAlchemy= Async.wrap(Alchemy,['imageFaces']);
		var response= wrappedAlchemy.imageFaces(imageBuffer,{});
		//console.log(response)
		return response;
	},
	savePicture: function(picture){
		picture.owner=Meteor.userId();
		picture.time= new Date();
		picture.score=0;
		picture.upvoters=[];
		Pictures.insert(picture);
	},
	like: function(pictureId){
		if(Pictures.findOne({_id: pictureId,upvoters:Meteor.userId()}))
			throw new Meteor.Error('Already liked');
		else
			Pictures.update({_id:pictureId},{$push:{upvoters: Meteor.userId()},
											$inc: {score:1}});
		
	}
});