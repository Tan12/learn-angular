import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // 异步模块
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'chart',
    // 同步模块
    component: ChartComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path:'login',
    component:UserLoginComponent
  },
  {
    path:'forgetpwd',
    component:ForgetPwdComponent
  },
  {
    path:'register',
    component:UserRegisterComponent
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'manage',
    loadChildren: './manage/manage.module#ManageModule'
  },
  {
    path: '**', // fallback router must in the last
    loadChildren: './home/home.module#HomeModule'
  }
];
