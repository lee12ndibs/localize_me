import { Component, OnInit } from '@angular/core';
import { first,} from 'rxjs/operators';
import { User } from '../modeles/user';
import { UserService, } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { AmisService } from '../amis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-list-amis',
  templateUrl: './list-amis.component.html',
  styleUrls: ['./list-amis.component.css']
})
export class ListAmisComponent implements OnInit {
  currentUser: User;
  users = [];
  infoCurrentUser:User;
  listeAmis = [];

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService,
    
  ) {

      this.currentUser = this.authenticationService.currentUserValue;
      this.getInfoUser()
      
  }

  ngOnInit() {
      this.loadAllAmis()
  }
 

  getInfoUser(){
      this.userService.getById(this.currentUser['_id'])
      .pipe(first())
      .subscribe(user =>{
          this.infoCurrentUser = user;
          
      })
  }


  private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users =>{
            this.users  = users
            this.users = this.users.filter(user => user['_id'] !== this.currentUser['_id'])
            this.getInfoUser()
        });
  }

  private loadAllAmis(){
    this.userService.getById(this.currentUser['_id'])
      .pipe(first())
      .subscribe(user =>{
        user.amis.forEach(element =>{
          this.userService.getById(element)
            .pipe(first())
            .subscribe(amis =>{
              this.listeAmis.push(amis)
            })
        })
      })
  }



}
