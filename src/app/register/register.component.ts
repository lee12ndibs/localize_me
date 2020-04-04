import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import { AlertService } from '../alert.service';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        //on redirige vers le home s'il est loggé
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            prenom: ['', Validators.required],
            nom: ['', Validators.required],
            login: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

   
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
       
        //On reset les alerts
        this.alertService.clear();

        // formulaire invalide
        if (this.registerForm.invalid) {
            return;
        }

        
        this.loading = true;
      
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                  
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
