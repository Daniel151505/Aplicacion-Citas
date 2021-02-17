import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCitasComponent } from './components/lista-citas/lista-citas.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCitasComponent,
    CrearCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
