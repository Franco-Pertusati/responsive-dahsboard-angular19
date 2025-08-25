import { inject, Injectable, signal } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { ToastService } from './toast.service';
import { Toast } from '../interfaces/toast';
import { ShortenLink } from '../interfaces/link';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private apiUrl = `${enviroment.API_URL}/links`;
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
        throw new Error(error.message || 'Error shortening link');
      }

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
    } catch (error) {
      throw error;
    }
  }
}
