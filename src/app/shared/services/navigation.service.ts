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
      const allowedDomains = [
        'github.com',
        'linkedin.com',
        'instagram.com',
        'facebook.com',
        'api.whatsapp.com'
      ];

      if (!allowedProtocols.includes(parsed.protocol)) {
        console.warn(`Blocked navigation to disallowed protocol: ${parsed.protocol}`);
        return;
      }

      if (!allowedDomains.some(domain => parsed.hostname.endsWith(domain))) {
        console.warn(`Blocked navigation to non-whitelisted domain: ${parsed.hostname}`);
        return;
      }

      // Sanitize the URL by creating a new one with only the parts we want
      const sanitizedUrl = new URL(parsed.pathname + parsed.search + parsed.hash, parsed.origin);
      
      window.open(sanitizedUrl.href, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error('Invalid URL', err);
    }
  }

}
