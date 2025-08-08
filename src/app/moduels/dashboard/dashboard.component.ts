import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/ui/button/button.component";
import { CardComponent } from "../shared/ui/card/card.component";

@Component({
  selector: 'app-dashboard',
  imports: [ButtonComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
