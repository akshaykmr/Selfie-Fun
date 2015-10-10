Template.editTagModal.events({
	'click #saveTag': function(){
		var tag=$('#userTagInput').val();
		console.log(tag);

		var selectedFaceIndex= Session.get('selectedFace');

		var selector= {'index': selectedFaceIndex};
		var operator= {'$set': {'name': tag}};
		Faces.update(selector,operator);
	}
});