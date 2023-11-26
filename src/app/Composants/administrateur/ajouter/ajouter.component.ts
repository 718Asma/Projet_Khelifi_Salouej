import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  today: string = new Date().toISOString().split('T')[0];

  activityForm!: FormGroup;
  participantForm!: FormGroup;
  lesActivites: Activites[] = [];

  constructor(
    private routeur: Router,
    private activiteservice: ActiviteService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void
  {
    this.activiteservice.getActivites().subscribe(
      (data) => {
        this.lesActivites = data;
      }
    );

    this.activityForm = this.fb.group({
      intitule: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      nbParticipants: [0, Validators.required],
      complet: [''],
      date: [this.today],
      lieu: ['', Validators.required],
      lesParticipants: this.fb.array([])
    });
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

  get nbParticipants()
  {
    return this.activityForm.get('nbParticipants');
  }

  get date()
  {
    return this.activityForm.get('date');
  }

  get lieu()
  {
    return this.activityForm.get('lieu');
  }

  get participants()
  {
    return this.activityForm.get('lesParticipants') as FormArray;
  }

  get cin()
  {
    return this.participantForm.get('cin');
  }

  isValidPattern()
  {
    return this.cin?.errors?.['pattern'] && this.cin?.dirty;
  }

  get nom()
  {
    return this.participantForm.get('nom');
  }

  get prenom()
  {
    return this.participantForm.get('prenom');
  }

  get age()
  {
    return this.participantForm.get('age');
  }

  isMinAge()
  {
    return this.age?.errors?.['min'];
  }

  isMaxAge()
  {
    return this.age?.errors?.['max'];
  }

  get genre()
  {
    return this.participantForm.get('genre');
  }

  get photo()
  {
    return this.participantForm.get('photo');
  }

  onSubmitForm()
  {
    if(this.activityForm.valid)
    {
      let act: Activites = this.activityForm.value;
      this.activiteservice.addActivite(act).subscribe(
        (data) => {
          console.log(data);
          this.lesActivites.push(data);
          alert('Activité ajoutée avec succès!');
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

  onResetForm()
  {
    this.activityForm.reset();
  }

  onAjouter()
  {
    this.participants.push(
      this.participantForm = this.fb.group({
        cin: [, [Validators.required, Validators.pattern('[0-9]{8}')]],
        nom: [, Validators.required],
        prenom: [, Validators.required],
        age: [, [Validators.required, Validators.min(17), Validators.max(99)]],
        genre: [, Validators.required],
        photo: [, Validators.required]
      })
    );

    this.activityForm.get('nbParticipants')?.setValue(this.participants.length); 
  }

  onSupprimer()
  {
    if (this.participants.length > 0)
    {
      this.participants.removeAt(this.participants.length - 1);
    }
    
    this.activityForm.get('nbParticipants')?.setValue(this.participants.length); 
  }

  revenir()
  {
    this.routeur.navigate(['/admin']);
  }
}