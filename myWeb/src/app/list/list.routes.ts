import { RouterModule } from '@angular/router';

import { ListOneComponent } from './list-one/list-one.component';
import { ListTwoComponent } from './list-two/list-two.component';

// 定义常量，嵌套路由
export const listRoutes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {path: 'one', component: ListOneComponent},
  {path: 'two', component: ListTwoComponent}
];