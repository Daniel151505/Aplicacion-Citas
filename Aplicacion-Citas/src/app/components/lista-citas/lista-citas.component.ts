import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  @Input() listadoCitas: any;
  @Output() deleteCita = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminarCita(index: number){
    this.deleteCita.emit(index)
  }

}
