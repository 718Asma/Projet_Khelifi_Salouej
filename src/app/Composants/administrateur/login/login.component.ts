import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Classes/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  constructor(private authService:AuthService, private routeur:Router){}

  lesUtilisateurs : User[] = [];

  ngOnInit(): void
  {
    this.authService.getUsers().subscribe(
      data => {
        this.lesUtilisateurs = data;
      }
    );
  }

  onLogin(username:string, pwd:string)
  {
    if(this.authService.login(username, pwd))
    {
      this.routeur.navigate(['/admin']);
    }
    else
    {
      alert("Login ou mot de passe incorrect !");
    }
  }
}
