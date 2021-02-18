import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  nombre = ''
  fecha = ''
  hora = ''
  sintomas = ''

  formularioIncorrecto = false

  @Output() nuevaCita= new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita(){
    if (this.nombre == "" ||this.fecha == "" || this.hora == "" || this.sintomas == "" ) {
     this.formularioIncorrecto = true
      return 
    }

    this.formularioIncorrecto= false

    // Creando objeto para enviarselo al padre
      const Cita = {
        nombre: this.nombre,
        fecha: this.fecha,
        hora: this.hora,
        sintomas: this.sintomas

      }
      this.nuevaCita.emit(Cita)
      this.resetCampos()
  }

  resetCampos(){
    this.nombre = ''
    this.fecha = ''
    this.hora = ''
    this.sintomas = ''

  }

}
