import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SafTService } from '../services/safT/saf-t.service';

@Injectable({
  providedIn: 'root'
})
export class FiscalYearService implements Resolve<Observable<Object>> {

  constructor(private saft: SafTService) { }

  resolve(): Observable<Object> {
    return this.saft.get('header/fiscal-year');
  }
}
