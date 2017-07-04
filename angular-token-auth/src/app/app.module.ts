// Modules
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';
import { HttpModule }            from '@angular/http';
import { NgModule }              from '@angular/core';
import { MaterializeModule }     from 'angular2-materialize';
import { AppRoutingModule }      from './app-routing.module';

// Components
import { AppComponent }          from './app.component';
import { HomeComponent }         from './home/home.component';
import { ToolbarComponent }      from './toolbar/toolbar.component';
import { AuthDialogComponent }   from './auth-dialog/auth-dialog.component';
import { LoginFormComponent }    from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';

// Services
import { Angular2TokenService }  from 'angular2-token';
import { AuthService }             from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [Angular2TokenService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
