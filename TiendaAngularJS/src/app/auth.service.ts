import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

//Our firebase variable from
index.html,..... yes we are using JavaScript Firebase code
declare var firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router){

  }

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error){
        console.log(error);
      });
  }

  signinUser(user: User){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(value => {
        console.log('Success!', value);
        this.router.navigate(['/catalogo']);
      })
      .catch(function (error){
        alert("¡Datos Incorrectos!");
        console.log(error.menssage);

        this.router.navigate(['/singin']);
      });
  }

  logout(){
    firebase.auth().signOut();
    this.router.navigate(['/singin']);
  }

  isAuthenticated(){
    var user= firebase.auth().currentUser;

    if(user){
      return true;
    }
    else{
      return false;
    }
  }

}
