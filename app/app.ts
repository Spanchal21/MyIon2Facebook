import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

import {Device,AdMob,Push} from 'ionic-native';

// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': '68a9ddc6'
//     // 'gcm_key': '429603339128'
//   }
// };

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',

})
export class MyApp {
  private rootPage:any;  

  constructor(private platform:Platform) {
    this.rootPage = TabsPage;

     this.initializeApp();


    platform.ready().then(() => {
     
      alert(JSON.stringify('Device id='+Device.device.uuid));
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      //============= push notificatrion ===============
       var push = Push.init({
        android: {
          senderID: "667320175870"
        },
        ios: {
          alert: "true",
          badge: true,
          sound: 'false'
        },
        windows: {}
      });

      push.on('registration', (data) => {
        console.log("registrationId ->", data.registrationId);
      });

      push.on('notification', (data) => {
        console.log('message', data.message);
        console.log('title',data.title);
        console.log('count',data.count);
        console.log('sound',data.sound);
        console.log('image',data.image);
        console.log('additionalData',data.additionalData);

        // let self = this;
        // //if user using app and push notification comes
        // if (data.additionalData.foreground) {
        //   // if application open, show popup
        //   let confirmAlert = this.alertCtrl.create({
        //     title: 'New Notification',
        //     message: data.message,
        //     buttons: [{
        //       text: 'Ignore',
        //       role: 'cancel'
        //     }, {
        //       text: 'View',
        //       handler: () => {
        //         //TODO: Your logic here
        //         // self.nav.push(DetailsPage, {message: data.message});
        //       }
        //     }]
        //   });
        //   confirmAlert.present();
        // } else {
        //   //if user NOT using app and push notification comes
        //   //TODO: Your logic on click of push notification directly
        //   // self.nav.push(DetailsPage, {message: data.message});
        //   console.log("Push notification clicked");
        // }


      });

      push.on('error', (e) => {
        console.log(e.message);
      });








      //================= banner ========================
      interface AdMobType {
         banner:string,
         interstitial:string
       };
 
      var admobid:AdMobType;
 
            // select the right Ad Id according to platform
            if( /(android)/i.test(navigator.userAgent) ) {
                admobid = { // for Android
                    banner: 'ca-app-pub-4873773463893570/9608866842',
                    interstitial: 'ca-app-pub-4873773463893570/9608866842'
                };
            } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
                admobid = { // for iOS
                    banner: 'ca-app-pub-4873773463893570/9608866842',
                    interstitial: 'ca-app-pub-4873773463893570/9608866842'
                };
            } else {
                admobid = { // for Windows Phone
                    banner: 'ca-app-pub-4873773463893570/9608866842/8878394753',
                    interstitial: 'ca-app-pub-4873773463893570/9608866842/1355127956'
                };
            }
 
         if(AdMob)  AdMob.createBanner( {
                 adId:admobid.banner,
                 isTesting:true,//comment this out before publishing the app
                 autoShow:true} );

    });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      var push = Push.init({
        android: {
          senderID: "12345679"
        },
        ios: {
          alert: "true",
          badge: true,
          sound: 'false'
        },
        windows: {}
      });

      push.on('registration', (data) => {
        console.log(data.registrationId);
      });

      push.on('notification', (data) => {
        console.log(data.message);
        console.log(data.title);
        console.log(data.count);
        console.log(data.sound);
        console.log(data.image);
        console.log(data.additionalData);
      });

      push.on('error', (e) => {
        console.log(e.message);
      });
    });
  }



}

ionicBootstrap(MyApp)
