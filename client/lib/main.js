Meteor.startup(function(){

  //cosmetics
  sAlert.config({
      effect: 'flip',
      position: 'bottom',
      timeout: 5000,
      html: false,
      onRouteClose: true,
      stack: true,
      offset: 0
  });



  //GLOBAL
  login= function(){
    Meteor.loginWithTwitter({},function(error){
      if(!error)
        sAlert.info('Welcome!');
    });
  };

  logout= function(){
    Meteor.logout();
    Router.go('/');
    sAlert.info('Good bye');
  };

  savePicture=function(){
    var picture={
      src: Session.get('image'),
      faceList: Faces.find().fetch()
    };
    Meteor.call('savePicture',picture,function(error){
      if(!error)
        sAlert.info('Picuture saved!');
    });
  };

  setDuration= function(days){
    Session.set('duration',days);
  };
});