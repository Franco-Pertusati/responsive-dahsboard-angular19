import { Component, inject } from '@angular/core';
import { ShortenLink } from '../../../../../core/interfaces/link';
import { DialogService } from '../../../../../core/services/dialog.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../../../../shared/ui/button/button.component";

@Component({
  selector: 'app-link-panel',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './link-panel.component.html',
  styleUrl: './link-panel.component.css'
})
export class LinkPanelComponent {
  private dialog = inject(DialogService);

  data: any;

  ngOnInit() {
    this.data = this.dialog.dialogData().linkData;
  }
}
