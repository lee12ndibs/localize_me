import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { 
        path: 'register',
        loadChildren: () => import('./register/register.module')
                            .then(m => m.RegisterModule) 
    },
    { 
        path: 'update', 
        component: UpdateComponent,
        canActivate: [AuthGuard]
    },
    { path: 'map', 
        loadChildren: () => import('./map/map.module')
            .then(m => m.MapModule),
        canActivate: [AuthGuard]
    },
    { path: 'liste_amis',
        loadChildren: () => import('./list-amis/list-amis.module')
                .then(m => m.ListAmisModule),
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})



export class AppRoutingModule {}