import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../model/persona.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService 
{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPersonas(): Observable<Persona[]>
  {
    return this.http.get<Persona[]>(`${this.apiServerUrl}/persona/all`);
  }

  public addPersona(persona: Persona): Observable<Persona> 
  {
    return this.http.post<Persona>(`${this.apiServerUrl}/persona/add`, persona);
  } 

  public updatePersona(persona: Persona): Observable<Persona> 
  {
    return this.http.put<Persona>(`${this.apiServerUrl}/persona/update`, persona);
  }

  public deletePersona(personaId: number): Observable<void> 
  {
    return this.http.delete<void>(`${this.apiServerUrl}/persona/delete/${personaId}`);
  }
}
