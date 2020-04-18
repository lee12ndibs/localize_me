import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', 
        loadChildren: ()=> import('./register/register.module')
        .then(m => m.RegisterModule)
    },
    { path: 'update',  
        loadChildren: ()=> import('./update/update.module')
        .then(m => m.UpdateModule)
        },
    { path: 'map', 
        loadChildren: ()=> import('./map/map.module')
        .then(m => m.MapModule)},
    { path: 'liste_amis', 
        loadChildren: ()=> import('./list-amis/list-amis.module')
        .then(m => m.ListAmisModule)
        },
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);