import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  isMobile(): boolean {
    const userAgent = window.navigator.userAgent;
    return userAgent.toLowerCase().includes('mobile');
  }

  sleep (s: number) {
    return new Promise((r) => setTimeout(r, s*1000));
  }

  private getTimeRemaining(endDate: Date): number {
    const now = new Date().getTime();
    return endDate.getTime() - now;
  }

  getDaysRemaining(endDate: Date): Observable<number> {
    return interval(1000).pipe(
      map(() => {
        const distance = this.getTimeRemaining(endDate);
        return Math.floor(distance / (1000 * 60 * 60 * 24));
      })
    );
  }

  getHoursRemaining(endDate: Date): Observable<number> {
    return interval(1000).pipe(
      map(() => {
        const distance = this.getTimeRemaining(endDate);
        return Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      })
    );
  }

  getMinutesRemaining(endDate: Date): Observable<number> {
    return interval(1000).pipe(
      map(() => {
        const distance = this.getTimeRemaining(endDate);
        return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      })
    );
  }

  getSecondsRemaining(endDate: Date): Observable<number> {
    return interval(1000).pipe(
      map(() => {
        const distance = this.getTimeRemaining(endDate);
        return Math.floor((distance % (1000 * 60)) / 1000);
      })
    );
  }

}
