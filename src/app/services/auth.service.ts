import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${enviroment.API_URL}/auth`;

  async register(username: string, email: string, password: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error al registrar');
      }

      return await response.json();
    } catch (error: any) {
      console.error('Error en registro:', error);
      throw error;
    }
  }
}
