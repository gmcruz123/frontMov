import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesComponent } from './movies.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module'
import { MoviesRoutingModule, } from './movies-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    MovieDetailComponent,
    MoviesComponent,

  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MoviesRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      backgroundStroke: "#20CA77",
      innerStrokeColor: "#20CA77",
      animationDuration: 300,
      backgroundColor:'#000',
      titleColor:'#fff'
    })
  ]
})
export class MoviesModule { }
