import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion-Citas';

  listaCitas: any[] = []

  agregarCita(citas: any){
    this.listaCitas.push(citas)
  }

}
