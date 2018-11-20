import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaUzytkownikowComponent } from './lista-uzytkownikow/lista-uzytkownikow.component';
import { RezerwacjeComponent } from './rezerwacje/rezerwacje.component';
import { AuthGuard } from './_guards/auth.guard';
import { UzytkownikSzczegolyComponent } from './uzytkownik-szczegoly/uzytkownik-szczegoly.component';
import { UzytkownikEdycjaComponent } from './uzytkownik-edycja/uzytkownik-edycja.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'reservation', component: RezerwacjeComponent},
            { path: 'users', component: ListaUzytkownikowComponent},
            { path: 'users/:id', component: UzytkownikSzczegolyComponent},
            { path: 'user/edit', component: UzytkownikEdycjaComponent, canDeactivate: [PreventUnsavedChanges]},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
