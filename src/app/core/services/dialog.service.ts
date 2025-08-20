import { Injectable, signal, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  // Señal que controla si el diálogo está abierto o no
  isDialogOpen = signal<boolean>(false);

  // Señal que guarda el componente que se quiere mostrar en el diálogo
  componentToShow = signal<Type<any> | null>(null);

  // Opcional: datos que quieres pasar al componente
  dialogData = signal<any>(null);

  openDialog<T>(component: Type<T>, data?: any) {
    this.componentToShow.set(component);
    this.dialogData.set(data ?? null);
    this.isDialogOpen.set(true);
  }

  closeDialog() {
    this.isDialogOpen.set(false);
    this.componentToShow.set(null);
    this.dialogData.set(null);
  }
}
