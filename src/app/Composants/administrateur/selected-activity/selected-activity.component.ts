import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activites } from 'src/app/Classes/activites';
import { Participant } from 'src/app/Classes/participant';
import { ActiviteService } from 'src/app/Services/activite.service';

@Component({
  selector: 'app-selected-activity',
  templateUrl: './selected-activity.component.html',
  styleUrls: ['./selected-activity.component.css']
})
export class SelectedActivityComponent
{
  id: number = 0;
  act:Activites | undefined;

  constructor(private routeur: Router, private activatedRoute: ActivatedRoute, private activiteservice: ActiviteService) {}

  ngOnInit(): void
  {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.activiteservice.getActiviteById(this.id).subscribe(
      data => {this.act = data}
    );
  }

  onListe()
  {
    this.routeur.navigate(['/admin/activity']);
  }
}
