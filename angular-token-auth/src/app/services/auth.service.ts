import { Injectable } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { Subject, Observable } from "rxjs";
import { Response } from "@angular/http";

@Injectable()
export class AuthService {

  // RxJs Subject
  // See: https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/subjects.md
  userSignedIn$:Subject<boolean> = new Subject();

  constructor(public authService:Angular2TokenService) {
    this.authService.validateToken().subscribe(
      // Sets a "success" message on a 200 HTTP status, and "unsuccessful" on anything else
      res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    )
  }

  logOutUser():Observable<Response>{
    return this.authService.signOut().map(
      res => {
        this.userSignedIn$.next(false);
        return res;
      }
    );
  }

  registerUser(signUpData: {email:string, password:string, passwordConfirmation:string}):Observable<Response>{
    return this.authService.registerAccount(signUpData).map(
      res => {
        this.userSignedIn$.next(true);
        return res
      }
    );
  }

  logInUser(signInData: {email:string, password:string}):Observable<Response>{
    return this.authService.signIn(signInData).map(
      res => {
        this.userSignedIn$.next(true);
        return res
      }
    );
  }

}
