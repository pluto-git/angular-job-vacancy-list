import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {

  // for larger apps, not necessary for this one
  // credits to
  // https://blog.bitsrc.io/preloading-strategies-boost-up-angular-app-loading-time-ffb19da63155

  constructor() { }
  preload(route: Route, fn: () => Observable<unknown>): Observable<unknown> {
    const loadRoute = (delay: number) => delay > 0 ? timer(delay * 1000).pipe(map(() => fn())) : fn();
    if (route.data && route.data['preload']) {
      const delay = route.data['loadAfterSeconds'] ? route.data['loadAfterSeconds'] : 0;
      return loadRoute(delay);
    }
    return of(null);
  }

}

