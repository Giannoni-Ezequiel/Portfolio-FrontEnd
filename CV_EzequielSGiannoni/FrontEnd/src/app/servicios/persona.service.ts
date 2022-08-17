import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { persona } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://bkdprueba95.herokuapp.com/personas/';

  constructor(private http: HttpClient) { }
  
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
}
