import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    status$: Observable<boolean>;

    private subject = new BehaviorSubject<boolean>(false);
    private map = new Map<string, boolean>();

    constructor() {
        this.status$ = this.subject.asObservable().pipe(delay(0));
    }

    set(value: boolean, url: string): void {
        if (value) {
            this.map.set(url, value);
            this.subject.next(true);
            return;
        }

        if (!value && this.map.has(url)) {
            this.map.delete(url);
        }

        if (this.map.size === 0) {
            this.subject.next(false);
        }
    }
}
