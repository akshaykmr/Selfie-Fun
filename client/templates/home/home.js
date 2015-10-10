Template.home.onCreated(function() {
  $('body').addClass('no-bar no-tabs');
});
Template.home.onDestroyed(function() {
  $('body').removeClass('no-bar no-tabs');
});

Template.home.events({
	'click #faceTagging': function(){
		Router.go('faceTagging');
	}
});