import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoot } from './app.root';
import { TableGenerator } from './app.tablegenerator';


@NgModule({
  declarations: [
    AppRoot,
    TableGenerator
  ],
  imports: [
    BrowserModule,   
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppRoot]
})
export class AppModule { }
