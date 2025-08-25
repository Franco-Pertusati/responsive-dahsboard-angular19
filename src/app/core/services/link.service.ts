import { inject, Injectable, signal } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { ToastService } from './toast.service';
import { Toast } from '../interfaces/toast';
import { ShortenLink } from '../interfaces/link';
import { StateMachine } from '../interfaces/state-machine';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private apiUrl = `${enviroment.API_URL}/links`;

  toastService = inject(ToastService)

  urlList = signal<ShortenLink[]>([])

  async shorten(originalUrl: string, expiresAt: Date): Promise<any> {

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ originalUrl, expiresAt })
      });

      if (!response.ok) {
        const error = await response.json();
        this.toastService.errorToast('Error shortening link.')
        throw new Error(error.message || 'Error shortening link');
      }

      this.toastService.success('Link shorted with success')
      const newLinkData = await response.json();
      const newLink = {
        id: newLinkData.id,
        originalUrl: newLinkData.originalUrl,
        shortUrl: newLinkData.shortCode,
        createdAt: newLinkData.createdAt,
        expiresAt: expiresAt,
        favIcon: '',
      }
      this.urlList.update(list => [...list, newLink]);
      return newLink;
    } catch (error) {
      this.toastService.errorToast('Error shortening link.')
      throw error;
    }
  }
}
