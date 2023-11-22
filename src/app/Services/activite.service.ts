import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activites } from '../Classes/activites';

const URL = 'http://localhost:3000/activites';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http:HttpClient) { }

  public getActivites():Observable<Activites[]>
  {
    return this.http.get<Activites[]>(URL);
  }

  public getActiviteById(id:number):Observable<Activites>
  {
    return this.http.get<Activites>(URL + "/" + id);
  }

  public getActiviteByName(name:string):Observable<Activites[]>
  {
    return this.http.get<Activites[]>(URL + '?intitule=' + name);
  }

  public getActiviteByDate(date:string):Observable<Activites[]>
  {
    return this.http.get<Activites[]>(URL + '?date=' + date);
  }

  public getActiviteByNameAndDate(name:string, date:string):Observable<Activites[]>
  {
    return this.http.get<Activites[]>(URL + '?intitule=' + name + "&date=" + date);
  }

  public addActivite(a:Activites):Observable<Activites>
  {
    return this.http.post<Activites>(URL, a);
  }

  public updateActivite(id:number | undefined, a:Activites | undefined):Observable<Activites>
  {
    return this.http.put<Activites>(URL + '/' + id, a);
  }

  public deleteActivite(id:number):Observable<Activites>
  {
    return this.http.delete<Activites>(URL+"/"+ id);
  }
}
