import { Observable, of } from "rxjs";

export class UtilsServiceMock {
    isMobile(): boolean {
        return false;
    }
    sleep(s: number): Promise<unknown> {
        return new Promise((resolve) => setTimeout(resolve, s));
    }
    getDaysRemaining(): Observable<number> {
        return of(1);
    }
    getHoursRemaining(): Observable<number> {
        return of(1);
    }
    getMinutesRemaining(): Observable<number> {
        return of(1);
    }
    getSecondsRemaining(): Observable<number> {
        return of(1);
    }
}