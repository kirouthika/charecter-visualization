import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "https://rickandmortyapi.com/api/";
  constructor(private http: HttpClient) { }

  getCharList(){
    return this.http.get(this.apiUrl + "character");
  }
  getCharDetails(id:any){
    return this.http.get(this.apiUrl + "character/"+ id);
  }
}
