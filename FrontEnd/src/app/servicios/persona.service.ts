import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService 
{
  URL = environment.apiBaseUrl + '/persona/';

    constructor(private http: HttpClient) { }

    /*public getPersonas(): Observable<Persona[]>
    {
      return this.http.get<Persona[]>(`${this.URL}persona/ver`);
    }*/

    public addPersona(persona: Persona): Observable<Persona> 
    {
      return this.http.post<Persona>(`${this.URL}persona/crear`, persona);
    } 

    public updatePersona(persona: Persona): Observable<Persona> 
    {
      return this.http.put<Persona>(`${this.URL}persona/update`, persona);
    }

    public deletePersona(personaId: number): Observable<void> 
    {
      return this.http.delete<void>(`${this.URL}/persona/delete/${personaId}`);
    }

  }
