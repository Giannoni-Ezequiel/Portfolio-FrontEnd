import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HyS } from '../model/hys';

@Injectable({
  providedIn: 'root'
})
export class HysService {

  URL = environment.apiBaseUrl + 'hys/';

  constructor(
    private httpClient: HttpClient
  ) 
  { }
    public lista(): Observable<HyS[]>{
      return this.httpClient.get<HyS[]>(this.URL + 'lista');
    }
  
    public detail(id: number): Observable<HyS>{
      return this.httpClient.get<HyS>(this.URL + `detail/${id}`);
    }
  
    public save(hys: HyS): Observable<any>{
      return this.httpClient.post<any>(this.URL + 'create', hys);
    }
  
    public update(id: number, hys: HyS): Observable<any>{
      return this.httpClient.put<any>(this.URL + `update/${id}`, hys);
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }
  
}
