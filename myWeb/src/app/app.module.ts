import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PaginatorModule } from 'primeng/components/paginator/paginator';

// 表单 双向数据绑定
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

import { ListComponent } from './list/list.component';
import { ListOneComponent } from './list/list-one/list-one.component';
import { ListTwoComponent } from './list/list-two/list-two.component';
import { HomeComponent } from './home/home.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ListOneComponent,
    ListTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PaginatorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
