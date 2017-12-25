import { Component } from '@angular/core';
import {
    IonicPage,
    NavController,
    LoadingController,
    Loading,
    Platform,
    AlertController } from 'ionic-angular';
    import { AuthenticataProvider } from '../../providers/authenticata/authenticata';
    import {
        FormBuilder,
        FormGroup,
        Validators } from '@angular/forms';


        @Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        })
        export class LoginPage {
            /******* Poperties *******/
            public form                  : FormGroup;
            public displayForm           : boolean        = true;
            public displayError          : string;

            /******** CONSTRUCT *************/
            constructor(public navCtrl   : NavController,
                private _FB      : FormBuilder,
                private _PLAT    : Platform,
                public _AUTH     : AuthenticataProvider)
                {
                    this.form = this._FB.group({
                        'email'        : ['', Validators.required],
                        'password'     : ['', Validators.required]
                    });
                }
                /********** METHODS **********/
                logIn()
                {

                    let email      : any        = this.form.controls['email'].value,
                    password   : any        = this.form.controls['password'].value;

                    console.log(this.form.value);

                    this._AUTH.loginWithEmailAndPassword(email, password)
                    .then((auth : string) =>
                    {
                        this.form.reset();
                        this.displayForm     = false;
                        this.displayError    = '';
                        //this.navCtrl.setRoot('HomePage');
                    })
                    .catch((error) =>
                    {
                        this.displayError    = error.message;
                    });
                }

                logOut()
                {
                    this._AUTH.logOut()
                    .then((val) =>
                    {
                        this.displayForm     = true;
                        //this.navCtrl.setRoot('LoginPage');
                    })
                    .catch((error) =>
                    {
                        this.displayError    = error.message;
                    });
                }


            }
