Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',function(){
	this.layout('homeLayout');
	this.render('home');
});