import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './config.js';

import { User } from './modeles/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
    getById(id: string){
        return this.http.get<User>(`${config.apiUrl}/users/${id}`)
    }
    update(id , nom, prenom){
  
       return this.http.put(`${config.apiUrl}/users/${id}`,{nom, prenom})
  }
  updatePosition(user: User){
    let latitude  = user.latitude;
    let longitude = user.longitude
    
    return this.http.put(`${config.apiUrl}/users/${user["_id"]}`,{latitude, longitude})
}
}