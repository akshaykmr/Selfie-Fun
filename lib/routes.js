Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',function(){
	this.render('home');
});

Router.route('/faceTagging',function(){
	this.render('faceTagging');
});	

Router.route('/faceTaggingOutput',function(){
	this.render('faceTaggingOutput');
});