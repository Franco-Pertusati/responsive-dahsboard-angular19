import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  fb = inject(FormBuilder)

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
  }, {
    Validators: []
  })

  onSubmit() {
    console.log(this.registerForm)
  }
}
