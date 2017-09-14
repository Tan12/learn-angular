import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { EChartOptionDirective1 } from './chart/echart-option.directive';
import { appRoutes } from './app.routes';
import { MapComponent } from './map/map.component';
import { AmapComponent } from './map/amap/amap.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    EChartOptionDirective1,
    MapComponent,
    AmapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
