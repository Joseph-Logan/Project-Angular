import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Route[] =[
  {path:'',component:PrincipalComponent},
  {path:'home',component:HomeComponent},
  {path:'form',component:FormComponent},
  {path:'form/:id',component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
