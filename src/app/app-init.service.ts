import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private http: HttpClient) { }
  Init(){
    return this.http.get('http://localhost:3000/colors').toPromise().then((res)=>{
      console.log("response from Init service", res);
    })
  }
}
