import { Component } from '@angular/core';
import { LinkItemComponent } from "./link-item/link-item.component";

@Component({
  selector: 'app-landing-url-list',
  imports: [LinkItemComponent],
  templateUrl: './landing-url-list.component.html',
  styleUrl: './landing-url-list.component.css'
})
export class LandingUrlListComponent {

}
