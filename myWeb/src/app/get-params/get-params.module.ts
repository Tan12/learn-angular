import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaginatorModule } from 'primeng/components/paginator/paginator';

import { DetailComponent } from './detail/detail.component';

import { getParamsRoutes } from './get-params.routes';

@NgModule({
    imports: [
      CommonModule,
      PaginatorModule,
      RouterModule.forChild(getParamsRoutes)
    ],
    exports: [],
    declarations: [
      DetailComponent
    ],
    providers: []
})
export class GetParamsModule { }
