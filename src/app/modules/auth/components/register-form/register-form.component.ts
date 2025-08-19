import { Component, inject } from '@angular/core'
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../../../services/auth.service'
import { Router } from 'express'

// 🔹 Validador personalizado: confirmación de password
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value
  const confirmPassword = control.get('confirmPassword')?.value
  return password && confirmPassword && password !== confirmPassword ? { passwordMismatch: true } : null
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  imports: [ReactiveFormsModule]
})
export class RegisterFormComponent {
  fb = inject(FormBuilder)
  authService = inject(AuthService)

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/) // al menos una mayúscula, una minúscula y un número
    ]],
    confirmPassword: ['', [Validators.required]],
  }, { validators: passwordMatchValidator })


  onSubmit() {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.getRawValue()
      this.register(name!, email!, password!)
    } else {
      console.log('Formulario inválido')
      this.registerForm.markAllAsTouched()
    }
  }

  async register(name: string, email: string, password: string) {
    try {
      const response = await this.authService.register(name, email, password);
      console.log('Usuario registrado:', response);
      alert('¡Registro exitoso!');
    } catch (error: any) {
      console.error('Error al registrar:', error);
      alert(error.message || 'Ocurrió un error en el registro');
    }
  }
}
