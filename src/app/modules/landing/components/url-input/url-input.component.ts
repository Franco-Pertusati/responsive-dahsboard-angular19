import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ToastService } from '../../../../core/services/toast.service';
import { LinkService } from '../../../../core/services/link.service';
import { ButtonPromiseComponent } from "../../../../shared/ui/button-promise/button-promise.component";

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrl: './url-input.component.css',
  imports: [FormsModule, ButtonPromiseComponent]
})
export class UrlInputComponent {
  longUrl: string = ''
  toast = inject(ToastService)
  linkService = inject(LinkService)
  shortenState: 'default' | 'loading' | 'error' | 'success' = 'loading'

  shortenUrl() {
    const url = this.validateUrl(this.longUrl)
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000)

    if (url) {
      this.linkService.shorten(url, expiresAt)
    } else {
      this.toast.errorToast('Invalid URL')
      return
    }
    this.longUrl = ''
  }

  validateUrl(input: string): string | null {
    const sanitized = input.trim();

    if (!sanitized) return null;

    const htmlPattern = /<[^>]*>/g;
    if (htmlPattern.test(sanitized)) return null;

    const sqlPattern = /('|--|;|\/\*|\*\/|xp_)/i;
    if (sqlPattern.test(sanitized)) return null;

    try {
      const url = new URL(sanitized);

      // Debe usar HTTPS
      if (url.protocol !== 'https:') return null;

      const domainParts = url.hostname.split('.');
      if (domainParts.length < 2) return null;

      const tld = domainParts[domainParts.length - 1];
      if (!/^[a-z]{2,}$/i.test(tld)) return null;

      return url.toString();
    } catch (err) {
      return null;
    }
  }
}
