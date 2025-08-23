import { Component, inject } from '@angular/core'
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../../../core/services/auth.service'
import { ToastService } from '../../../../core/services/toast.service'

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
  toast = inject(ToastService)

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
    ]],
    confirmPassword: ['', [Validators.required]],
  }, { validators: passwordMatchValidator })


  onSubmit() {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.getRawValue()
      this.register(name!, email!, password!)
    } else {
      this.registerForm.markAllAsTouched()
    }
  }

  async register(name: string, email: string, password: string) {
    try {
      const response = await this.authService.register(name, email, password);
      this.toast.success(`Welcome ${name}`)
    } catch (error: any) {
      this.toast.errorToast('Register failed')
    }
  }
}
