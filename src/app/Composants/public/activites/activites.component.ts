import { Component, Input, OnInit } from '@angular/core';
import { Activites } from 'src/app/Classes/activites';
import { ActiviteService } from 'src/app/Services/activite.service';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit
{
  @Input("activite") a!: Activites;


  lesActivites:Activites[] = [];

  constructor(private activiteservice:ActiviteService){}
  
  ngOnInit(): void
  {
    this.activiteservice.getActivites().subscribe(
      data => {this.lesActivites = data}
    );
  }
}
