import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activites } from 'src/app/Classes/activites';
import { ActiviteService } from 'src/app/Services/activite.service';

@Component({
  selector: 'app-menu-public',
  templateUrl: './menu-public.component.html',
  styleUrls: ['./menu-public.component.css']
})
export class MenuPublicComponent {

  constructor(private routeur:Router, private activiteservice:ActiviteService){}
  
  act:Activites[] = [];
  ok:boolean = false;

  info()
  {
    this.ok = true;
  }

  rechercher(value:string)
  {
    this.ok = false;

    if(value.includes('/'))
    {
      let donne = value.split('/');
      let name = donne[0];
      let date = donne[1];

      this.activiteservice.getActiviteByNameAndDate(name, date).subscribe(
        data => {
          console.log(data);
          if (data[0].id !== undefined) {
            const id: number = data[0].id;
            this.routeur.navigate(['/activite/' + id]);
          } else {
            console.error('ID is undefined');
          }
        }
      );
    }
    else 
    {
      if(value.includes('-'))
      {
        this.activiteservice.getActiviteByDate(value).subscribe(
          data => {
            console.log(data);
            if (data[0].id !== undefined) {
              const id: number = data[0].id;
              this.routeur.navigate(['/activite/' + id]);
            } else {
              console.error('ID is undefined');
            }
          }
        );
      }
    else
    {
      this.activiteservice.getActiviteByName(value).subscribe(
        data => {
          console.log(data);
          if (data[0].id !== undefined) {
            const id: number = data[0].id;
            this.routeur.navigate(['/activite/' + id]);
          } else {
            console.error('ID is undefined');
          }
        }
      );
    }
    }
  }
  

  extranet()
  {
    this.routeur.navigate(['/extranet']);
  }
}
