import { Component, input } from '@angular/core';
import { ShortenLink } from '../../../../../core/interfaces/link';
import { enviroment } from '../../../../../../enviroments/enviroment';

@Component({
  selector: 'app-link-item',
  imports: [],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css'
})
export class LinkItemComponent {
  link = input.required<ShortenLink>()
  linkTunUrl = enviroment.LINKTUN_URL

  ngOnInit() {}
}
