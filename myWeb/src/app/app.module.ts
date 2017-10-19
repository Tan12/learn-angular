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

// 定义常量，嵌套路由
const appChildRoutes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {path: 'one', component: ListOneComponent},
  {path: 'two', component: ListTwoComponent}
];

// 定义常量，路由
const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListComponent, children: appChildRoutes},
  {path: 'getparams', loadChildren:'./get-params/get-params.module#GetParamsModule'},
  {path: '**', redirectTo: 'home'} // 未定义路由跳转到home路由界面
];

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
