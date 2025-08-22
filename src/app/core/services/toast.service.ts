import { Injectable, signal } from '@angular/core';
import { Toast } from '../interfaces/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastList = signal<Toast[]>([])

  createToast(toast: Toast) {
    this.toastList.set([...this.toastList(), toast]);
    setTimeout(() => {
      this.closeToast()
    }, 3000);
  }

  closeToast() {
    const currentToasts = this.toastList();
    this.toastList.set(currentToasts.slice(1));
  }

  errorToast(title: string, message?: string) {
    const newToast: Toast = {
      title: title,
      message: message || undefined,
      icon: 'close'
    }
    this.createToast(newToast)
  }

  success(title: string, message?: string) {
    const newToast: Toast = {
      title: title,
      message: message || undefined,
      icon: 'check'
    }
    this.createToast(newToast)
  }
}
