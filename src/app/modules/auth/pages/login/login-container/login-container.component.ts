import { Component } from '@angular/core';
import { CardComponent } from "../../../../../shared/ui/card/card.component";
import { LoginFormComponent } from "../login-form/login-form.component";

@Component({
  selector: 'app-login-container',
  imports: [CardComponent, LoginFormComponent],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.css'
})
export class LoginContainerComponent {

}
