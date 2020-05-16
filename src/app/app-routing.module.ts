import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailPlanetComponent} from './detail-planet/detail-planet.component';
import {AboutAuthorComponent} from './about-author/about-author.component';
import {ListComponent} from './list/list.component';


const routes: Routes = [
  { path: 'details/:id', component: DetailPlanetComponent },
  { path: 'about', component: AboutAuthorComponent },
  {path: '', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
