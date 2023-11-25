import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activites } from 'src/app/Classes/activites';
import { Participant } from 'src/app/Classes/participant';
import { ActiviteService } from 'src/app/Services/activite.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
{
  id: number = 0;
  act!:Activites;
  participantForm !:FormGroup;

  constructor(private routeur: Router, private activatedRoute: ActivatedRoute, private activiteservice: ActiviteService, private fb:FormBuilder){}

  ngOnInit(): void
  {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.activiteservice.getActiviteById(this.id).subscribe(
      data => {this.act = data}
    );

    this.participantForm = this.fb.nonNullable.group({
      cin:[, [Validators.required, Validators.pattern('[0-9]{8}')]],
      nom:[, Validators.required],
      prenom:[, Validators.required],
      age:[, [Validators.required, Validators.min(17), Validators.max(99)]],
      genre:[, Validators.required],
      photo:[, Validators.required]
    })
  }

  public get cin()
  {
    return this.participantForm.get('cin');
  }

  isValidPattern()
  {
    return this.cin?.errors?.['pattern'] && this.cin?.dirty;
  }

  public get nom()
  {
    return this.participantForm.get('nom');
  }

  public get prenom()
  {
    return this.participantForm.get('prenom');
  }

  public get age()
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

  public get genre()
  {
    return this.participantForm.get('genre');
  }

  public get photo()
  {
    return this.participantForm.get('photo');
  }

  onSubmitForm()
  {
    if(this.participantForm.valid)
    {
      let ok:boolean = true;
      let cin = this.participantForm.get('cin')?.value;

      for(let p of this.act.lesParticipants)
      {
        if(p.cin == cin)
        {
          ok = false;
        }
      }
      if(ok)
      {
        let participant : Participant = this.participantForm.value;
        let a : Activites = this.act;
        a.nbParticipants += 1;
        a?.lesParticipants.push(participant);
        this.activiteservice.updateActivite(this.act?.id, a).subscribe(
          data => {
            console.log(data);
            alert("Merci pour votre participation!");
            this.routeur.navigate(['/activite']);
          }
        )
      }
      else
      {
        alert('Vous êtes déjà inscrit à ' + this.act.intitule);
      }
      
    }
    else
    {
      alert("Veuillez remplir le formulaire d'abord!");
    }
  }

  onResetForm()
  {
    this.participantForm.reset();
  }
}
