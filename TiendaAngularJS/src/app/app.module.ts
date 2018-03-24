import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { DataTableModule } from "angular2-datatable";
import { ReactiveFormsModule } from '@angular/forms'

import { CatalogoComponent,SearchPipe } from './catalogo/catalogo.component';
import { CatalogoService } from './catalogo.service';
import { DataService } from './data.service';
import { ItemcarService } from './itemcar.service';
import { DataitemcarService } from './dataitemcar.service';

import { CatalogoComponent } from './catalogo/catalogo.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ItemcarComponent } from './itemcar/itemcar.component';
import { MenuComponent } from './menu/menu.component';

import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    DescripcionComponent,
    ItemcarComponent,
    MenuComponent,
    SinginComponent,
    SingupComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService, CatalogoService, DataService, ItemcarService, DataitemcarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
