import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MapService {

    constructor() {
    }

    getMaps() {
        return of('data')
    }
}
