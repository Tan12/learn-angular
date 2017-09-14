import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

export const appRoutes=[
	{
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
	{
		path:"home",
		// 异步模块
		loadChildren:'./home/home.module#HomeModule'
	},
	{
		path:"chart",
		// 同步模块
		component:ChartComponent
	},
	{
		path:"map",
		component:MapComponent
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'./home/home.module#HomeModule'
	}
];
