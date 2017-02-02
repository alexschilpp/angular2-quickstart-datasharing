import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CountingService } from './counting.service';

import { AppComponent }  from './app.component';
import { ComponentA } from './componentA.component';
import { ComponentB } from './componentB.component';

@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ CountingService ],
  declarations: [ AppComponent,
                  ComponentA,
                  ComponentB ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
