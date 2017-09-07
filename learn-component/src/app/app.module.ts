import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { FatherComponent } from './ng-content/father/father.component';
import { Child111Component } from './ng-content/Father/child111/child111.component';
import { TestNgNoChangesComponent } from './test-ng-no-changes/test-ng-no-changes.component';
import { Child222Component } from './test-ng-no-changes/child222/child222.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    FatherComponent,
    Child111Component,
    TestNgNoChangesComponent,
    Child222Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
