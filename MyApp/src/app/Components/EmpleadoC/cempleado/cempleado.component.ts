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
  //Porperty  Binding , la propiedad del html tiene que ir entre[] para que lo reconozca esta propiedad
  habilitacioncuadro = false;
  user="Usuario no registrado";

  //event binding
  registrar(){
    //alert("El usuario se acaba de registrar");
    this.user="El usuario se acaba de registrar"
  }

  //two way binging -- Gnmodul
  empresaNgModel='default value';

  //NgIf
  registrado=false;

  userRegistro(){
    this.registrado=true;
  }
}
