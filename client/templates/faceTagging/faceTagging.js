var getPicture = function(opts) {
   MeteorCamera.getPicture(opts, function(err, data) {
     if (err) {
       console.log('error', err);
     }
     if (data) {
       Session.set('image', data);
       Router.go('/faceTaggingOutput');
     }
   });
 };

Template.faceTagging.events({
  'click .lib': function () {
     if (Meteor.isCordova) {
       getPicture({
   /*    width: 350,
         height: 350,*/
         quality: 100,
         sourceType: Camera.PictureSourceType.PHOTOLIBRARY
       });
     } else {
       alert('Cordova only feature.');
     }
   },
  'click .cap': function () {
     getPicture({
      /* width: 350,
       height: 350,*/
       quality: 100
     });
   }
});