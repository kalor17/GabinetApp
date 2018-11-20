import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UzytkownikEdycjaComponent } from '../uzytkownik-edycja/uzytkownik-edycja.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<UzytkownikEdycjaComponent> {
    canDeactivate(component: UzytkownikEdycjaComponent) {
        if (component.editForm.dirty) {
            return confirm('Chcesz kontynuować? Wszsytkie niezapisane zmiany zostana utracone');
        }
        return true;
    }
}
