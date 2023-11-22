import { Component } from '@angular/core';
import { Activites } from 'src/app/Classes/activites';
import { ActiviteService } from 'src/app/Services/activite.service';

@Component({
  selector: 'app-list-activites',
  templateUrl: './list-activites.component.html',
  styleUrls: ['./list-activites.component.css']
})
export class ListActivitesComponent
{
  lesActivites:Activites[] = [];

  constructor(private activiteservice:ActiviteService){}
  
  ngOnInit(): void
  {
    this.activiteservice.getActivites().subscribe(
      data => {this.lesActivites = data}
    );
  }
}
