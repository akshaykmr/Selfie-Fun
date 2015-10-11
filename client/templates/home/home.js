Template.home.onCreated(function() {
  $('body').addClass('no-bar no-tabs');
});
Template.home.onDestroyed(function() {
  $('body').removeClass('no-bar no-tabs');
});

Template.home.onRendered(function(){

	setTimeout(function(){
		var animation='animated jello';
		var animationEnd='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$('#faceTagging').addClass(animation).one(animationEnd,function(){
			$(this).removeClass(animation);
		});
	},400);

	
});

Template.home.events({
	'click #faceTagging': function(){
		var animation='animated zoomOut';
		$('#faceTagging').addClass(animation);
		setTimeout(function(){
			Router.go('faceTagging');
		},400);
		
	}
});