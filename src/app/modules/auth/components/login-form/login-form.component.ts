import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  fb = inject(FormBuilder)

  loginForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
  }, {
    Validators: [

    ]
  })

  onSubmit() {
    console.log(this.loginForm)
  }
}
