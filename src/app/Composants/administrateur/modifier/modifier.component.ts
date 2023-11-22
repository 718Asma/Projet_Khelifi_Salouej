import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
  id: number = 0;
  act!: Activites;
  activityForm!: FormGroup;

  constructor(private routeur: Router, private activatedRoute: ActivatedRoute, private activiteservice: ActiviteService, private fb: FormBuilder) {}

  ngOnInit(): void
  {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.activiteservice.getActiviteById(this.id).subscribe((data) => {
      this.act = data;

      this.activityForm = this.fb.group({
        id: [data.id],
        intitule: [data.intitule],
        image: [data.image],
        description: [data.description],
        nbParticipants: [data.nbParticipants],
        complet: [data.complet],
        date: [data.date],
        lieu: [data.lieu],
        lesParticipants: this.fb.array([]),
      });

      let participantsFormArray = this.activityForm.get('lesParticipants') as FormArray;

      data.lesParticipants.slice(0, 2).forEach((participant) => {
        participantsFormArray.push(
          this.fb.group({
            cin: [participant.cin],
            nom: [participant.nom],
            prenom: [participant.prenom],
            age: [participant.age],
            genre: [participant.genre],
            photo: [participant.photo],
          })
        );
      });
    });
  }

  get participantsFormArray()
  {
    return this.activityForm.get('lesParticipants') as FormArray;
  }

  onSubmitForm() {
    let activite: Activites = this.activityForm.value;

    for (let i = 0; i < Math.min(this.participantsFormArray.length, 2); i++)
    {
      let participantGroup = this.participantsFormArray.at(i) as FormGroup;
      participantGroup.get('age')?.setValue(participantGroup.get('age')?.value + 1);
    }

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

  revenir()
  {
    this.routeur.navigate(['/admin']);
  }
}
