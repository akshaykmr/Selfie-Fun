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
});
