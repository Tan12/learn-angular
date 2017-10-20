import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';

import { listRoutes } from './list/list.routes';

// 定义常量，路由
export const appRoutes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListComponent, children: listRoutes},
  {path: 'getparams', loadChildren:'./get-params/get-params.module#GetParamsModule'},
  {path: '**', redirectTo: 'home'} // 未定义路由跳转到home路由界面
];