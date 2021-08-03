import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModules } from './contadores/contador/contador.module';

//tarea:
//Crear un modulo llamado contadorModule
//declaraciones y  exportaciones
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
