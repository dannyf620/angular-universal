import { ResultadosComponent } from './../resultados/resultados.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeSectionComponent } from '../home-section/home-section.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: '404', component: NotFoundComponent },
  { path: ':section', component: HomeSectionComponent },
  // {
  //   path: '', component: RegionComponent, children: [
  //   ]
  // },
  { path: '**', redirectTo: '/404' }
];