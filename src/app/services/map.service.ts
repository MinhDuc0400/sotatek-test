import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { IMap } from '../map/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getMaps() {
    return this.http.get('assets/map.json')
      .pipe(
        map((res: IMap) => res.scenes),
        catchError(() => of([]))
      );
  }
}
