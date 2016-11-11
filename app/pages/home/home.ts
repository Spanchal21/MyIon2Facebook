import {Component} from '@angular/core';
import {Facebook} from 'ionic-native';
import {NavController, Alert, Loading} from 'ionic-angular';



declare const facebookConnectPlugin;
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

    this.myname = 'sagar panchal';

  }

  model : {};
  myname : string;
  status : string;
  id : string;
  name : string;
  picture : string;
  birthday : string;
  email : string;

  login() {
  	let loading = Loading.create({ content: "Loading..." })
    this.navCtrl.present(loading);
    facebookConnectPlugin.login(['email'],response => {
        console.log(response);
        if(response.status == "connected"){
            this.status = "connected";

  			facebookConnectPlugin.api('/'+ response.authResponse.userID + '?fields=id,name,picture,gender,birthday,email',[],
  				function onSuccess(result){
            alert(JSON.stringify(result));

            this.id = result.id;
            this.nmae = result.name;
            this.picture = result.picture.data.url;
            this.email = result.email;

  				},function onError(error){
  					alert(JSON.stringify(error));
  				})
  			 loading.dismiss();
  		}else{
  			 loading.dismiss();
  			  let alert = Alert.create({
                title: 'Operation faild',
                subTitle: 'Login Failed..!',
                buttons: ['Ok']
            });
             this.navCtrl.present(alert);
  		}
      },
      error => {
         loading.dismiss();
      	alert('Try again');
        console.log(error);
      }
    );
  }
  
  // getdetails(){
  // 	facebookConnectPlugin.getLoginStatus((response) => {
  // 		alert(JSON.stringify(response));
  // 		if(response.status == "connected"){
  // 			 facebookConnectPlugin.api('/'+ response.authResponse.userID + '?fields=id,name',[], //,picture,gender,birthday,email
  // 				function onSuccess(result){
  // 					alert(JSON.stringify(result));
  // 				},function onError(error){
  // 					alert(JSON.stringify(error));
  // 				})
  // 		}else{
  // 			alert('not logedin');
  // 		}
  // 	})
  // }


  logout(){
    if(this.status == "connected"){
      let confirm = Alert.create({
      title: 'Log out?',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            facebookConnectPlugin.logout((response) => {
            // alert(JSON.stringify(response));
            this.navCtrl.setRoot(HomePage);
          })
          }
        }
      ]
    });
    this.navCtrl.present(confirm);
  }else{
    let alert = Alert.create({
          title: 'alert',
          subTitle: 'you are already logout..!',
          buttons: ['Ok']
      });
       this.navCtrl.present(alert);
  }                      
  }

}
