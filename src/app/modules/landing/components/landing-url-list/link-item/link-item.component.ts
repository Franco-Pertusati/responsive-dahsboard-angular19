import { Component, inject, input } from '@angular/core';
import { ShortenLink } from '../../../../../core/interfaces/link';
import { enviroment } from '../../../../../../enviroments/enviroment';
import { DialogService } from '../../../../../core/services/dialog.service';
import { LinkPanelComponent } from '../link-panel/link-panel.component';

@Component({
  selector: 'app-link-item',
  imports: [],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css'
})
export class LinkItemComponent {
  dialog = inject(DialogService)
  link = input.required<ShortenLink>()
  linkTunUrl = enviroment.LINKTUN_URL

  openLinkPanel() {
    this.dialog.openDialog(LinkPanelComponent, { linkData: this.link() })
    console.log(this.dialog.dialogData())
  }
}
