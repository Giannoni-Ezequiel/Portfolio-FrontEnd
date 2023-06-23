import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jwt } from '../model/jwt.dto';
import { LoginUsuario } from '../model/login.usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable
({
    providedIn: 'root'
  })
  export class AuthService 
  {
    
    private url = environment.apiBaseUrl;
  
    constructor(private httpClient: HttpClient) { }
  
    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>
    {
      return this.httpClient.post<any>(this.url + 'auth/nuevo', nuevoUsuario);
      } 
  
    public login(loginUsuario: LoginUsuario): Observable<Jwt>
    {
      return this.httpClient.post<Jwt>(this.url + 'auth/login', loginUsuario);
      }
    }