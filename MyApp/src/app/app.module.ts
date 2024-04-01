import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CEmpleadosComponent } from './Components/cempleados/cempleados.component';
import { CEmpleadoComponent } from './Components/EmpleadoC/cempleado/cempleado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CEmpleadosComponent,
    CEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule// para poder usar  ngmodel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
