import { Component } from '@angular/core';
import { Activites } from 'src/app/Classes/activites';
import { ActiviteService } from 'src/app/Services/activite.service';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent
{
  lesActivites:Activites[] = [];

  constructor(private activiteservice:ActiviteService){}
  
  ngOnInit(): void
  {
    this.activiteservice.getActivites().subscribe(
      data => {this.lesActivites = data}
    );
  }

  onActivityDeleted(id: number)
  {
    this.lesActivites = this.lesActivites.filter(activity => activity.id !== id);
  }
}
