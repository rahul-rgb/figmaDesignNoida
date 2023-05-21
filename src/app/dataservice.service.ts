import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface data {
  name:any;
  price:any;
  author:any;
}

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any>('assets/data.json')
    }
}
