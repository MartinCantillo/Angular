import { Component } from '@angular/core';

@Component({
  selector: 'app-cempleado',
  templateUrl: './cempleado.component.html',
  styleUrls: ['./cempleado.component.css']
})
export class CEmpleadoComponent {
  nombre = 'Martin ';
  Apellido = "Cantillo";
  Cargo = "Ingeniero de Softwate";
  Edad = 21;
  //Porperty  Binding
  habilitacioncuadro = true;
}
