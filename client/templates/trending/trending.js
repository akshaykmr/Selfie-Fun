Template.trending.onCreated(function(){
	this.subscribe('trending',Session.get('duration'));
});

Template.trending.helpers({
	noPictures: function(){
		return Pictures.find().count()===0;
	},
	picture: function(){
		return Pictures.find({},{$sort:{score:-1}});
	}
});

Template.trending.events({
	'click .like': function(){
		if(!Meteor.user()){
			sAlert.warning('You need to sign in first. Swipe left');
		}else{
			Meteor.call('like',this._id,function(error){
				if(error)
					sAlert.warning('Already liked');
				else{
					sAlert.info('upvoted!');
				}
			});
		}
	},
	'click .viewImage':function(){
		Session.set('viewImage',this._id);
		Router.go('viewImage');
	}
});