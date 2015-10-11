Template.layout.helpers({
	getBarStyle: function(){
		var currentRoute= Router.current().route.getName();
		if(currentRoute)
		if(currentRoute.indexOf('faceTagging')=== -1){
			return 'bar-calm';
		}else{
			return 'bar-energized';
		}
	},
	faceTaggingOutput: function(){
		return Router.current().route.getName()==='faceTaggingOutput';
	},
	home: function(){
		return !Router.current().route.getName();
	}
});