import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  reloadPage() {
    window.location.href = `?_reload`;
  }

  openExternal(url: string) {
    try {
      const parsed = new URL(url);
      const allowedProtocols = ['http:', 'https:', 'mailto:'];
      if (allowedProtocols.includes(parsed.protocol)) {
        window.open(parsed.href, '_blank', 'noopener,noreferrer');
      } else {
        console.warn(`Blocked navigation to disallowed protocol: ${parsed.protocol}`);
      }
    } catch (err) {
      console.error('Invalid URL', err);
    }
  }

}
