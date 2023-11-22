import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activites } from 'src/app/Classes/activites';
import { ActiviteService } from 'src/app/Services/activite.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent
{
  @Input("activite") a!: Activites;
  @Output() activityDeleted : EventEmitter<number> = new EventEmitter<number>();

  lesActivites:Activites[] = [];

  constructor(private activiteservice:ActiviteService){}
  
  ngOnInit(): void
  {
    this.activiteservice.getActivites().subscribe(
      data => {this.lesActivites = data}
    );
  }

  supprimer(id: number)
  {
    this.activiteservice.deleteActivite(id).subscribe(
      () => {
        this.activityDeleted.emit(id);
        alert("Suppression réussie !");
      },
      error => {
        console.error("Delete error:", error);
        alert("Erreur lors de la suppression");
      }
    );
  }
}
