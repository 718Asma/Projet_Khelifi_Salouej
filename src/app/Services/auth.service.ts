import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Classes/user';

const URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient)
  {
    this.getUsers().subscribe(
      data => {
        this.lesUtilisateurs = data;
      }
    )
  }

  public getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(URL);
  }

  public getUserByUsername(username:string):Observable<User[]>
  {
    return this.http.get<User[]>(URL + "?username=" + username);
  }

  public addUser(u:User):Observable<User>
  {
    return this.http.post<User>(URL, u);
  }

  updateUser(id:number, u:User):Observable<User>
  {
    return this.http.put<User>(URL+"/"+ id, u);
  }
    

  private authenticated = false;
  lesUtilisateurs : User[] = [];


  public login(username: string, pwd: string)
  {
    for(let i=0; i<this.lesUtilisateurs.length; i++)
    {
      if(username.toLowerCase() == this.lesUtilisateurs[i].username && pwd == this.lesUtilisateurs[i].pwd)
      {
        return this.authenticated = true;
      }
    }
    return this.authenticated;
  }

  public logout()
  {
    this.authenticated = false;
  }

  public isAuthenticated()
  {
    return this.authenticated;
  }
}
