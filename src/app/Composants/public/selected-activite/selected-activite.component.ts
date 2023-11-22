import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activites } from 'src/app/Classes/activites';
import { ActiviteService } from 'src/app/Services/activite.service';

@Component({
  selector: 'app-selected-activite',
  templateUrl: './selected-activite.component.html',
  styleUrls: ['./selected-activite.component.css']
})
export class SelectedActiviteComponent {

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
    this.routeur.navigate(['/activite']);
  }

  sinscrire()
  {
    this.routeur.navigate(['/signup', this.id]);
  }
}
