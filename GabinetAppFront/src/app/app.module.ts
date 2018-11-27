import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BsDropdownModule, BsDatepickerModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PasekComponent } from './pasek/pasek.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { ListaUzytkownikowComponent } from './lista-uzytkownikow/lista-uzytkownikow.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { RezerwacjeComponent } from './rezerwacje/rezerwacje.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { JwtModule } from '@auth0/angular-jwt';
import { UzytkownikSzczegolyComponent } from './uzytkownik-szczegoly/uzytkownik-szczegoly.component';
import { UzytkownikEdycjaComponent } from './uzytkownik-edycja/uzytkownik-edycja.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { VisitService } from './_services/visit.service';
import { WizytaListComponent } from './wizyta-list/wizyta-list.component';
import { WizytaAddComponent } from './wizyta-add/wizyta-add.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      PasekComponent,
      HomeComponent,
      RejestracjaComponent,
      ListaUzytkownikowComponent,
      RezerwacjeComponent,
      UzytkownikSzczegolyComponent,
      UzytkownikEdycjaComponent,
      WizytaListComponent,
      WizytaAddComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      VisitService,
      PreventUnsavedChanges
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
