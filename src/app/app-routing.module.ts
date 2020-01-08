import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'fet', component:FeaturesComponent},
  {path:'abt', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
