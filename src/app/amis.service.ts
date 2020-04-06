import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './config.js';
import { User } from './modeles/user'

@Injectable({
  providedIn: 'root'
})
export class AmisService {

  constructor(private http:HttpClient) { }
  add_ami(id: number, id_ami:number){

    return this.http.post(`${config.apiUrl}/users/add_ami`, {id, id_ami})
  }

}
