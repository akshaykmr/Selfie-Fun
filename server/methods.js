Meteor.methods({
	'fetchFaces': function(imageDataURI){

		var image= imageDataURI.slice(imageDataURI.indexOf('/9j')); //console log
		var imageBuffer= new Buffer(image,'base64');

		var wrappedAlchemy= Async.wrap(Alchemy,['imageFaces']);
		var response= wrappedAlchemy.imageFaces(imageBuffer,{});
		//console.log(response)
		return response;
	}
});