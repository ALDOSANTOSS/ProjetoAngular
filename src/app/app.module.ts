import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponet } from './primeiro-componente.componet';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponet

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
