import { Component } from '@angular/core';
import { GoogleAuthBtnComponent } from "../google-auth-btn/google-auth-btn.component";

@Component({
  selector: 'app-login-mail',
  imports: [GoogleAuthBtnComponent],
  templateUrl: './login-mail.component.html',
  styleUrl: './login-mail.component.css'
})
export class LoginMailComponent {

}
