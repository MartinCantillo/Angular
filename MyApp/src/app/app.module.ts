import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CEmpleadosComponent } from './Components/cempleados/cempleados.component';
import { CEmpleadoComponent } from './Components/EmpleadoC/cempleado/cempleado.component';

@NgModule({
  declarations: [
    AppComponent,
    CEmpleadosComponent,
    CEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
