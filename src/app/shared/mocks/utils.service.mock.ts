import { Observable, of } from "rxjs";

export class UtilsServiceMock {
    isMobile(): boolean {
        return false;
    }
    sleep(s: number): Promise<unknown> {
        return new Promise((resolve) => setTimeout(resolve, s));
    }
    getDaysRemaining(endDate: Date): Observable<number> {
        return of(1);
    }
    getHoursRemaining(endDate: Date): Observable<number> {
        return of(1);
    }
    getMinutesRemaining(endDate: Date): Observable<number> {
        return of(1);
    }
    getSecondsRemaining(endDate: Date): Observable<number> {
        return of(1);
    }
}