import { Injectable, signal } from '@angular/core';
import { Toast } from '../interfaces/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastList = signal<Toast[]>([])

  createToast(toast: Toast) {
    this.toastList.set([...this.toastList(), toast]);
    console.log("toastCreado")
  }
}
