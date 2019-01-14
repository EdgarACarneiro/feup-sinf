import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SafTService {

  constructor(private http: HttpClient) { }

  /**
   * GET request to the saf-T Api
   */
  get(endpoint: string) : Observable<Object> {
    return this.http.get(
      `${environment.safTApi}/${endpoint}`,
    );
  }
}
