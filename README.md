###Selfie-Fun
####built for meteor 2015 hackathon
#####Cordova Mobile app for detecting and analyzing faces in your photos made with Meteor and alchemy vision api.

####demo video: https://youtu.be/XF9RQYSNbFU

Make sure meteor is installed.
To run first clone the repo.

run on simulator.

>$ meteor run ios  

run on device.

>$ meteor run ios-device

If you dont have ios you can android as platform as well. I didn't have the sdk installed.

>$ meteor add-platform android
>$ meteor run android

You can access the app on chrome localhost:3000 just make window mobile sized.

####Note: if you want to use save feature and twitter login

create a new file in 'server' 

>server/socialConfig.js

```javascript
	ServiceConfiguration.configurations.remove({
	  service: "twitter"
	});

	ServiceConfiguration.configurations.insert({
	  service: "twitter",
	  consumerKey: "your consumer key from twitter",
	  secret: "secret"
	});
```

####Meteor packages used

* meteorhacks:async
* fortawesome:fontawesome
* juliancwirko:s-alert
* juliancwirko:s-alert-flip
* juliancwirko:s-alert-scale
* natestrauser:animate-css
* momentjs:moment
* fourseven:scss@2.0.0
* meteoric:ionic-sass
* meteoric:ionicons-sass
* meteoric:ionic
* alchemy   wrap alcehmy api for meteor
* meteorhacks:npm

Loading animation from: http://tobiasahlin.com/spinkit/



 
