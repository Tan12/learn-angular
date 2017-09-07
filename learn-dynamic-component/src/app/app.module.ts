import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { ChildComponent } from './dynamic-component/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ChildComponent]
})
export class AppModule { }
