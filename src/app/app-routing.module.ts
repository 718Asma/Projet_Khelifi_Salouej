import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPublicComponent } from './Composants/public/dashboard-public/dashboard-public.component';
import { ErreurComponent } from './Composants/erreur/erreur.component';
import { LoginComponent } from './Composants/administrateur/login/login.component';
import { AproposComponent } from './Composants/public/apropos/apropos.component';
import { DashAdminComponent } from './Composants/administrateur/dash-admin/dash-admin.component';
import { administrateurGuard } from './Composants/administrateur/administrateur.guard';
import { SelectedActiviteComponent } from './Composants/public/selected-activite/selected-activite.component';
import { SignupComponent } from './Composants/public/signup/signup.component';
import { ListActivitesComponent } from './Composants/public/list-activites/list-activites.component';
import { CompteComponent } from './Composants/administrateur/compte/compte.component';
import { ListActivityComponent } from './Composants/administrateur/list-activity/list-activity.component';
import { SelectedActivityComponent } from './Composants/administrateur/selected-activity/selected-activity.component';
import { ModifierComponent } from './Composants/administrateur/modifier/modifier.component';
import { AjouterComponent } from './Composants/administrateur/ajouter/ajouter.component';
import { EmploiComponent } from './Composants/administrateur/emploi/emploi.component';

const routes: Routes = [
  {path:'', title:'Dashboard', component:DashboardPublicComponent,
    children:[
      {path:'activite', title:'Nos Activités', component:ListActivitesComponent},
      {path:"activite/:id", title:"Info Activité", component:SelectedActiviteComponent},
      {path:'signup/:id', title:"S'inscrire", component:SignupComponent},
      {path:'apropos', title:'A propos de nous', component:AproposComponent},
      {path:'', redirectTo:'activite', pathMatch:'full'}
  ]},
  {path:'extranet', title:'Extranet', component:LoginComponent},
  {path:'admin', title:'Administrateur', component:DashAdminComponent,
  children:[
    {path:'emploi', title:'Emploi du temps', component:EmploiComponent},
    {path:'compte', title:'Mon Compte', component:CompteComponent},
    {path:'activity', title:'Activite', component:ListActivityComponent}, 
    {path:"activity/:id", title:"Info Activité", component:SelectedActivityComponent}, 
    {path:"activity/modifier/:id", title:"Modifier Activité", component:ModifierComponent},
    {path:'ajouter', title:'Ajouter Activité', component:AjouterComponent},
    {path:'', redirectTo:'activity', pathMatch:'full'}
  ], canActivate:[administrateurGuard]},
  {path:'**', title:'Erreur', component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
