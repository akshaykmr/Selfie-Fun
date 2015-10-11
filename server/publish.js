Meteor.publish('myPictures',function(){
	return Pictures.find({owner: this.userId});
});

Meteor.publish('trending',function(duration){
	if(duration){
		var period= new moment().subtract(duration,'days').toDate();;


		return Pictures.find({time:{$gt: period} });
	}else{
		return Pictures.find();
	}
	
});