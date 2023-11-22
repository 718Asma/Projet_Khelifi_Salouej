import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErreurComponent } from './Composants/erreur/erreur.component';
import { MenuAdminComponent } from './Composants/administrateur/menu-admin/menu-admin.component';
import { MenuPublicComponent } from './Composants/public/menu-public/menu-public.component';
import { DashboardPublicComponent } from './Composants/public/dashboard-public/dashboard-public.component';
import { ActivitesComponent } from './Composants/public/activites/activites.component';
import { AccueilComponent } from './Composants/public/accueil/accueil.component';
import { AproposComponent } from './Composants/public/apropos/apropos.component';
import { DashAdminComponent } from './Composants/administrateur/dash-admin/dash-admin.component';
import { SelectedActiviteComponent } from './Composants/public/selected-activite/selected-activite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Composants/administrateur/login/login.component';
import { SignupComponent } from './Composants/public/signup/signup.component';
import { ListActivitesComponent } from './Composants/public/list-activites/list-activites.component';
import { BoldTextPipe } from './Pipes/bold-text.pipe';
import { CompteComponent } from './Composants/administrateur/compte/compte.component';
import { WeatherComponent } from './Composants/public/weather/weather.component';
import { ActivityComponent } from './Composants/administrateur/activity/activity.component';
import { ListActivityComponent } from './Composants/administrateur/list-activity/list-activity.component';
import { SelectedActivityComponent } from './Composants/administrateur/selected-activity/selected-activity.component';
import { ModifierComponent } from './Composants/administrateur/modifier/modifier.component';
import { AjouterComponent } from './Composants/administrateur/ajouter/ajouter.component';
import { EmploiComponent } from './Composants/administrateur/emploi/emploi.component';

@NgModule({
  declarations: [
    AppComponent,
    ErreurComponent,
    MenuAdminComponent,
    LoginComponent,
    MenuPublicComponent,
    DashboardPublicComponent,
    ActivitesComponent,
    AccueilComponent,
    AproposComponent,
    DashAdminComponent,
    SelectedActiviteComponent,
    SignupComponent,
    ListActivitesComponent,
    BoldTextPipe,
    CompteComponent,
    WeatherComponent,
    ActivityComponent,
    ListActivityComponent,
    SelectedActivityComponent,
    ModifierComponent,
    AjouterComponent,
    EmploiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
