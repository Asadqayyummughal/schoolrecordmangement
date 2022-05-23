import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentrecordsService {

  constructor(private http:HttpClient) { }
  fetcData(){
    return this.http.get('http://apitest.sertifi.net/api/Students')
  }
}
