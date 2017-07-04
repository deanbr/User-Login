import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.sass']
})
export class AuthDialogComponent implements OnInit {

  @Input('auth-mode') authMode: 'login' | 'register' = 'login';
  modalActions = new EventEmitter<string | MaterializeAction> ();

  constructor() { }

  ngOnInit() {
  }

  // Event handlers
  onLoginFormResult(e){
    if(e.signedIn)
      this.closeDialog();
    else{
      alert(e.err.json().errors[0])
    }
  }

  onRegisterFormResult(e){
    if(e.signedUp)
      this.closeDialog();
    else{
      alert(e.err.json().errors.full_messages[0])
    }
  }

  // General Open / Close actions
  openDialog(mode: 'login' | 'register' = 'login'){
    this.authMode = mode;
    this.modalActions.emit({action:"modal", params:['open']});
  }

  closeDialog(){
    this.modalActions.emit({action:"modal", params:['close']});
  }

  // Abstracted basic logic
  isLoginMode(){ return this.authMode == 'login' }
  isRegisterMode(){ return this.authMode == 'register' }

}
