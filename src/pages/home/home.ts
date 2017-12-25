import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AuthenticataProvider } from '../../providers/authenticata/authenticata';
import {
   FormBuilder,
   FormGroup,
   Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   public form                  : FormGroup;
   public displayForm           : boolean        = true;
   public displayError          : string;


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
      })
      .catch((error) =>
      {
         this.displayError    = error.message;
      });
   }


}
