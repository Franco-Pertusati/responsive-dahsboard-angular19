import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/ui/button/button.component";
import { UrlInputComponent } from "./components/url-input/url-input.component";
import { LandingHeaderComponent } from "./components/landing-header/landing-header.component";
import { LandingUrlListComponent } from "./components/landing-url-list/landing-url-list.component";

@Component({
  selector: 'app-landing-page',
  imports: [UrlInputComponent, LandingHeaderComponent, ButtonComponent, LandingUrlListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
