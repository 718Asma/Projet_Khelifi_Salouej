import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Classes/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent
{
  constructor(private authService:AuthService, private fb:FormBuilder, private routeur:Router){}

  lesUtilisateurs : User[] = [];
  userForm!: FormGroup;

  ngOnInit():void
  {
    this.authService.getUsers().subscribe(
      data => {
        this.lesUtilisateurs = data;
      }
    );

    this.userForm = this.fb.nonNullable.group({
      apwd:[, Validators.required],
      npwd:[,Validators.required],
      cnpwd:[,Validators.required]
    });
  }

  onSubmitForm()
  {
    if(this.userForm.get('apwd')?.value != this.lesUtilisateurs[0].pwd)
    {
      alert("L'ancien mot de passe entrée est érroné !");
      this.userForm.reset();
    }
    else if(this.userForm.get('apwd')?.value == this.userForm.get('npwd')?.value)
    {
      alert("Votre nouveau mot de passe doit être diffèrent de votre ancien mot de passe !");
      this.userForm.reset();
    }
    else if(this.userForm.get('npwd')?.value != this.userForm.get('cnpwd')?.value)
    {
      alert("La confirmation de  mot de passe entrée diffère du nouveau mot de passe entré !");
      this.userForm.reset();
    }
    else
    {
      if(this.userForm.valid)
      {
        let user : User = new User('admin', this.userForm.get('npwd')?.value);
        this.authService.updateUser(1, user).subscribe(
          data => {
            console.log(this.userForm.value);
            console.log(data);
            alert("Mot de passe changé avec succès!");
            this.routeur.navigate(['/admin']);
          },
          error => {
            console.log(error);
            alert("PROBLEM!");
          }
        );
      }
      else
      {
        alert("Veuillez remplir le formulaire d'abord!");
      }
    }
    
  }
}
