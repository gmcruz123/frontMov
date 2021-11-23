import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BannerComponent } from './banner/banner.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    BannerComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    IvyCarouselModule,
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
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    BannerComponent
  ]
})
export class SharedComponentsModule { }
