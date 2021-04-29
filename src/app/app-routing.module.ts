import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {NosotrosComponent} from '../app/nosotros/nosotros.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'nosotros',component:NosotrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
