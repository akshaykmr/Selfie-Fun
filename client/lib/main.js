Meteor.startup(function(){

  //cosmetics
  sAlert.config({
      effect: 'flip',
      position: 'bottom',
      timeout: 3000,
      html: true,
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

});