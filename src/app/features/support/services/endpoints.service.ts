import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContactRequest } from '../../../shared/types/IContactRequest.model';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private _http: HttpClient) { }

  public sendForm(data: IContactRequest): Observable<any> {
    return this._http.post('https://formspree.io/contacto@fiesta-apolo.com', data);
  }
}
