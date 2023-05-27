import { Component, OnInit } from '@angular/core';
import { DESCRIPCION_CATEGORIAS } from 'src/app/models/peliculas';
import { SECCIONES } from 'src/app/models/secciones'; 
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-peliculas-por-seccion',
  templateUrl: './peliculas-por-seccion.component.html',
  styleUrls: ['./peliculas-por-seccion.component.css']
})

export class PeliculasPorSeccionComponent implements OnInit{
  descripcion= DESCRIPCION_CATEGORIAS
  idSecciones2= SECCIONES
  idseccion:number=0;
  constructor(private activateRoute: ActivatedRoute,private router:Router){

    
  }

  ngOnInit(): void {
    this.idseccion=this.activateRoute.snapshot.params['idSeccion']
    console.log(this.idseccion)
      
  }


  verDetalles(id : number){
    this.router.navigate(['peliculaDetalle', id])
      
  }
}
