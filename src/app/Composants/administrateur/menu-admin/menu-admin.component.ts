import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activites } from 'src/app/Classes/activites';
import { ActiviteService } from 'src/app/Services/activite.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent
{
  act:Activites[] = [];

  constructor(private authService:AuthService, private routeur:Router, private activiteservice:ActiviteService){}

  onLogout()
  {
    this.authService.logout();
    this.routeur.navigate(['/']);
  }

  rechercher(name:string)
  {
    this.activiteservice.getActiviteByName(name).subscribe(
      data => {
        if (data[0].id !== undefined)
        {
          const id: number = data[0].id;
          this.routeur.navigate(['/admin/activity/' + id]);
        }
        else
        {
          console.error('ID is undefined');
        }
      }
    );
  }
}
