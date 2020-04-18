import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../alert.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
    //    redirection vers le home
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });

        // on récupère l'adresse de retour  ou le home par défaut '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        
        this.alertService.clear();

        
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        
        

        this.authenticationService.login(this.f.login.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
