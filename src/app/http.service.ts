import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http: HttpClient) { }

  LoadData(value:any) {
     return this.http.get('http://apilayer.net/api/validate?access_key=d9c52c285f7b3937ed0288332402b6ac&number='+value.mobileNumber+'&country_code='+value.country);
  }

}
