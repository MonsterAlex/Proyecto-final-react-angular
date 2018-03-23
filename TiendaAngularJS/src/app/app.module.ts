import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ItemcarComponent } from './itemcar/itemcar.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    DescripcionComponent,
    ItemcarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
