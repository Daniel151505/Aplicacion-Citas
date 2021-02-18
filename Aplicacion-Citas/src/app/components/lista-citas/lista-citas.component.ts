import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  @Input() listadoCitas: any;

  constructor() { }

  ngOnInit(): void {
  }

}
