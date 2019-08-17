import { NgModule, Output, EventEmitter } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard', menuClickable: false } },
  { path: 'heroes', component: HeroesComponent, data: {title: 'Heroes', menuClickable: false } },
  { path: 'detail/:id', component: HeroDetailComponent, data: { title: 'Hero detail', menuClickable: true } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
