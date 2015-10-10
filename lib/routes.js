Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',function(){
	this.render('home');
});

Router.route('/faceTagging',function(){
	this.render('faceTagging');
});	