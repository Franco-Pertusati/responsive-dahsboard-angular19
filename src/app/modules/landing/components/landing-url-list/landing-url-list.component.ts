import { Component, inject, signal } from '@angular/core';
import { LinkItemComponent } from "./link-item/link-item.component";
import { LinkService } from '../../../../core/services/link.service';
import { ShortenLink } from '../../../../core/interfaces/link';

@Component({
  selector: 'app-landing-url-list',
  imports: [LinkItemComponent],
  templateUrl: './landing-url-list.component.html',
})
export class LandingUrlListComponent {
  linkService = inject(LinkService);
  demoLink: ShortenLink = {
    id: 33,
    originalUrl: 'https://www.youtube.com/watch?v=FiY2RivXWdk&t=2461s',
    shortUrl: 'lkt/try.com',
    createdAt: new Date('2024-06-01T12:00:00Z'),
    expiresAt: new Date('2024-07-01T12:00:00Z'),
    favIcon: `https://www.google.com/s2/favicons?sz=64&domain_url=https://www.youtube.com/watch?v=9ui3YBR1z-g`
  }
}
