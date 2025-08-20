import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogComponent } from "./shared/ui/dialog/dialog.component";
import { DialogService } from './core/services/dialog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DialogComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dialog = inject(DialogService);
}
