import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllsurveysComponent } from './allsurveys/allsurveys.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'survey', component:SurveyComponent},
  {path:'allsurveys', component:AllsurveysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
