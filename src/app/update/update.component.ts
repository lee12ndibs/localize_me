import { Component, OnInit } from '@angular/core';
import { User } from '../modeles/user';
import { UserService } from '../user.service';
import {AlertService} from '../alert.service'
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  currentUser: User;

  registerForm: FormGroup;
  loading = false;
  submitted = false;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private router: Router,
    ) {

        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        prenom: ["", Validators.required],
        nom: ["", Validators.required],
        password : ["", Validators.required],
    });
   
    // this.registerForm.patchValue({prenom:this.currentUser.prenom, nom:this.currentUser.nom})
  }
  // getter pour le formulaire
  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true;
   
    // reset alerts dans la valideation
    this.alertService.clear();

    // formulaire invalide
    if (this.registerForm.invalid) {
        return;
    }

    
    this.loading = true;
    
    this.userService.update(this.currentUser['_id'], this.registerForm.value.nom,  this.registerForm.value.prenom)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Modifications effectuées!', true);
                this.authenticationService.login(this.currentUser.login,  this.registerForm.value.password)
                .pipe(first())
                .subscribe(
                    data => {
                        this.router.navigate(["home"]);
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });
                
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}
