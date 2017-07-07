import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MdIconModule,
    MdToolbarModule,
    MdButtonModule,
    MdMenuModule,
    MdSidenavModule,
} from '@angular/material';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    MdIconModule,
    MdToolbarModule,
      MdButtonModule,
      MdMenuModule,
      MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
