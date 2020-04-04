import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../modeles/user';
import { first } from 'rxjs/operators';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  selectedMarker;
  users = []
 

  constructor(private userService : UserService){}
  ngOnInit(){
    this.loadAllUsers()
  }

  addMarker(lat: number, lng: number) {
    this.users.push({ lat, lng, alpha: 0.4 });
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.users.map(user => user[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.users.map(user => user[coordType]));
  }

  selectMarker(event) {
    this.selectedMarker = {
      latitude: event.latitude,
      lon: event.longitude
    };
  }
  private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
}
  
}
