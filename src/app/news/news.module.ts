import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { HttpClientModule } from '@angular/common/http';
import { ShortPipe } from './short.pipe';
import { IndexComponent } from './index/index.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';

@NgModule({
  declarations: [
    BusinessComponent,
    EntertainmentComponent,
    ScienceComponent,
    TechnologyComponent,
    SportsComponent,
    ShortPipe,
    IndexComponent,
    GeneralComponent,
    HealthComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class NewsModule { }
