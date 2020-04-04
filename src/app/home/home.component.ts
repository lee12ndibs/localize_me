import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../modeles/user';
import { UserService, } from '../user.service';
import { AuthenticationService } from '../authentication.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    lng : any;
    lat : any;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        
        
    ) {

        this.currentUser = this.authenticationService.currentUserValue;
        
    }

    ngOnInit() {
        if (navigator)
        {
        navigator.geolocation.getCurrentPosition( pos => {
            this.currentUser.longitude = Number(+pos.coords.longitude);
            this.currentUser.latitude =  Number(+pos.coords.latitude);
            
            this.userService.updatePosition(this.currentUser)
            .subscribe(() => this.loadAllUsers());
            });
        }
        this.loadAllUsers();

    }
   

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
   
}
