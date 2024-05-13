import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({providedIn: 'root'})
export class SerieService {

    private url: string = environment.baseUrl + 'series';

    constructor(private http: HttpClient) { }

}
