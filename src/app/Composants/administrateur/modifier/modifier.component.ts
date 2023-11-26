import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activites } from 'src/app/Classes/activites';
import { Participant } from 'src/app/Classes/participant';
import { ActiviteService } from 'src/app/Services/activite.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit
{
  id : number = 0;
  act !: Activites;
  lesParticipants : Participant[] =[]
  activityForm !: FormGroup;

  constructor(private routeur: Router, private activatedRoute: ActivatedRoute, private activiteservice: ActiviteService, private fb: FormBuilder) {}

  ngOnInit(): void
  {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.activiteservice.getActiviteById(this.id).subscribe((data) => {
      this.act = data;
      this.lesParticipants = data.lesParticipants

      this.activityForm = this.fb.group({
        id: [data.id, Validators.required],
        intitule: [data.intitule, Validators.required],
        image: [data.image, Validators.required],
        description: [data.description, Validators.required],
        nbParticipants: [data.nbParticipants, Validators.required],
        complet: [data.complet],
        date: [data.date, Validators.required],
        lieu: [data.lieu, Validators.required]
      });
    })
  }

  get intitule()
  {
    return this.activityForm.get('intitule');
  }

  get image()
  {
    return this.activityForm.get('image');
  }

  get description()
  {
    return this.activityForm.get('description');
  }

  get nbPartipants()
  {
    return this.activityForm.get('nbParticipants');
  }

  get complet()
  {
    return this.activityForm.get('complet');
  }

  get date()
  {
    return this.activityForm.get('date');
  }

  get lieu()
  {
    return this.activityForm.get('lieu');
  }

  onSubmitForm()
  {
    if(this.activityForm.valid)
    {
      let activite: Activites = this.activityForm.value;
      activite.lesParticipants = this.lesParticipants;

      this.activiteservice.updateActivite(activite.id, activite).subscribe(
        (data) => {
          console.log(this.activityForm.value);
          console.log(data);
          alert('Activité modifiée avec succès!');
          this.routeur.navigate(['/admin']);
        },
        (error) => {
          console.log(error);
          alert('PROBLEM!');
        }
      );
    }
    else
    {
      alert("Veuillez vérifier le formulaire !");
    }
  }

  revenir()
  {
    this.routeur.navigate(['/admin']);
  }
}
