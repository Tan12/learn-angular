import { RouterModule } from '@angular/router';

import { DetailComponent } from './detail/detail.component';

export const getParamsRoutes = [
  {
    path:'',
    redirectTo:'page/1',
    pathMatch:'full'
  },
  {
    path:'page/:id',
    component: DetailComponent
  }
];