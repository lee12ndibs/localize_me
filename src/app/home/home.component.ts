import { Component, OnInit, Pipe , PipeTransform} from '@angular/core';
import { first,} from 'rxjs/operators';
import { User } from '../modeles/user';
import { UserService, } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { AmisService } from '../amis.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    infoCurrentUser:User;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private amisService: AmisService,
        private router: Router
    ) {

        this.currentUser = this.authenticationService.currentUserValue;
        this.getInfoUser()
        
    }

    ngOnInit() {
        if (navigator)
        {
        navigator.geolocation.getCurrentPosition( pos => {
            this.currentUser.longitude = pos.coords.longitude.toString();
            this.currentUser.latitude =  pos.coords.latitude.toString();
            
            this.userService.updatePosition(this.currentUser)
            .subscribe(() => this.loadAllUsers());
            });
        }
        this.loadAllUsers();
      

    }
   

    getInfoUser(){
        this.userService.getById(this.currentUser['_id'])
        .pipe(first())
        .subscribe(user =>{
            this.infoCurrentUser = user;
        })
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
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

    add_ami(id:number, id_ami:number){

            this.amisService.add_ami(id, id_ami)
            .pipe(first())
            .subscribe(() => {
                this.loadAllUsers()
                this.router.navigate(['home'])})
           
    }

   
   
}
