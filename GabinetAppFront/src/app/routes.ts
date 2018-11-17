import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaUzytkownikowComponent } from './lista-uzytkownikow/lista-uzytkownikow.component';
import { RezerwacjeComponent } from './rezerwacje/rezerwacje.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'reservation', component: RezerwacjeComponent},
            { path: 'users', component: ListaUzytkownikowComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
