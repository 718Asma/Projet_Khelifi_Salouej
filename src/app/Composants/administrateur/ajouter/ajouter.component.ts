import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Activites } from 'src/app/Classes/activites';
import { ActiviteService } from 'src/app/Services/activite.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent
{
  activityForm !: FormGroup;
  dirigeantForm !: FormGroup;
  lesActivites : Activites[] = [];  

  constructor(private routeur: Router, private activiteservice: ActiviteService, private fb:FormBuilder) {}

  ngOnInit(): void
  {
    this.activiteservice.getActivites().subscribe(
        data => { this.lesActivites = data }
    );

    this.activityForm = this.fb.nonNullable.group({
        intitule: ['', Validators.required],
        image: ['', Validators.required],
        description: ['', Validators.required],
        nbParticipants: ['', Validators.required],
        complet: ['', Validators.required],
        date: ['', Validators.required],
        lieu: ['', Validators.required],
        lesParticipants: this.fb.array([])
    });
  }

  public get intitule()
  {
    return this.activityForm.get('intitule');
  }

  public get image()
  {
    return this.activityForm.get('image');
  }

  public get description()
  {
    return this.activityForm.get('description');
  }

  public get nbPartipants()
  {
    return this.activityForm.get('nbParticipants');
  }

  public get complet()
  {
    return this.activityForm.get('complet');
  }

  public get date()
  {
    return this.activityForm.get('date');
  }

  public get lieu()
  {
    return this.activityForm.get('lieu');
  }

  public get participants()
  {
      return this.activityForm.get('lesParticipants') as FormArray;
  }

  onSubmitForm()
  {
      let act: Activites = this.activityForm.value;
      this.activiteservice.addActivite(act).subscribe(
          data => {
              console.log(data);
              this.lesActivites.push(data);
              alert("Activité ajoutée avec succès!");
              this.routeur.navigate(['/admin']);
          },
          error => {
            console.log(error);
            alert("PROBLEM!");
          }
      );
  }

  onResetForm()
  {
    this.activityForm.reset();
  }

  onAjouter()
  {
    this.participants.push(this.fb.group({
        cin: [''],
        nom: [''],
        prenom: [''],
        age: [0],
        genre: [''],
        photo: ['']
    }));
  }

  onSupprimer()
  {
    this.participants.clear();
  }

  revenir()
  {
    this.routeur.navigate(['/admin']);
  }
}
