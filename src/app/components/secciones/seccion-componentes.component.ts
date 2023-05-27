import { Component } from '@angular/core';
import { SECCIONES } from 'src/app/models/secciones';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seccion-componentes',
  templateUrl: './seccion-componentes.component.html',
  styleUrls: ['./seccion-componentes.component.css']
})
export class SeccionComponentesComponent {

  secciones= SECCIONES

  constructor (private router: Router){
    
  }
  entrar(idSeccion : number ){
    this.router.navigate(['/seccion',idSeccion])
  }

}
