import { Component } from '@angular/core';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CardComponent } from "./shared/ui/card/card.component";
import { LoginContainerComponent } from "./modules/auth/pages/login/login-container/login-container.component";

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, CardComponent, LoginContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
