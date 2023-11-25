import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css'],
})

export class EmploiComponent
{
  form : boolean = false;
  arrangementForm !:FormGroup;

  weeks: any[][] = [];
  daysInMonth = 31;
  daysPerWeek = 7;
  firstDayOfMonth = 4;
  today : string = new Date().toISOString().split('T')[0];

  constructor(private fb:FormBuilder){}

  ngOnInit(): void
  {
    let novemberDays = 27;
    let currentDay = 1;

    for (let i = 0; i < Math.ceil(this.daysInMonth / this.daysPerWeek); i++) 
    {
      let week: (number | null)[] = [];
      for (let j = 0; j < this.daysPerWeek; j++)
      {
        if (i === 0 && j < this.firstDayOfMonth)
        {
          week.push(novemberDays++);
        }
        else if (currentDay <= this.daysInMonth)
        {
          week.push(currentDay++);
        }
        else
        {
          week.push(null);
        }
      }
      this.weeks.push(week);
    }

    this.arrangementForm = this.fb.nonNullable.group({
      date:[this.today],
      intitule:[]
    });
  }

  toTitleCase(str: string): string
  {
    return str.replace(/\w\S*/g, function (txt)
    {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  

  onAjouter()
  {
    this.form = true;
  }

  onSubmitForm()
  {
    let day = new Date(this.arrangementForm.get('date')?.value).toISOString().split('T')[0].split('-')[2];
    let month = new Date(this.arrangementForm.get('date')?.value).toISOString().split('T')[0].split('-')[1];
    let intitule: string = this.arrangementForm.get('intitule')?.value;
  
    if(month == '12')
    {
      for (let i = 0; i < this.weeks.length; i++)
      {
        for (let j = 0; j < this.weeks[i].length; j++)
        {
          if (this.weeks[i][j] == day)
          {
            let evElement: HTMLParagraphElement | null = document.querySelector(`#ev${i}_${j}`);

            if (evElement)
            {
              evElement.innerText = this.toTitleCase(intitule);
            }
          }
        }
      }

      this.form = false;
    }
    else if(month == '11' && day == '27' || day == '28' || day == '29' || day == '30')
    {
      for (let j = 0; j < this.weeks[0].length - 3; j++)
      {
        if (this.weeks[0][j] == day)
        {
          let evElement: HTMLParagraphElement | null = document.querySelector(`#ev${0}_${j}`);

          if (evElement)
          {
            evElement.innerText = this.toTitleCase(intitule);
          }
        }
      }

      this.form = false;
    }
    else
    {
      alert("Veuillez entrer une date visible sur l'emploi du temps ci-dessus.")
    }
  }
}
