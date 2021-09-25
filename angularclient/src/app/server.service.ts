import { Injectable } from '@angular/core';
import {HttpClient,} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http : HttpClient)
  { }

  getBatches()
  {
    return this.http.get('/Servers/getAdminDetails');
   
  }

}
