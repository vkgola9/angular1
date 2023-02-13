import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { IndexComponent } from './index/index.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path: 'index', redirectTo: 'news/index', pathMatch: 'full' },
  { path: 'news/business', component: BusinessComponent },
  { path: 'news/index', component: IndexComponent },
  { path: 'news/science', component: ScienceComponent },
  { path: 'news/general', component: GeneralComponent },
  { path: 'news/sports', component: SportsComponent },
  { path: 'news/entertainment', component: EntertainmentComponent },
  { path: 'news/technology', component: TechnologyComponent },
  { path: 'news/health', component: HealthComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
