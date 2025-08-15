import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../shared/ui/button/button.component";
import { GoogleAuthBtnComponent } from "../../../shared/google-auth-btn/google-auth-btn.component";

@Component({
  selector: 'app-login-form',
  imports: [ButtonComponent, GoogleAuthBtnComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

}
