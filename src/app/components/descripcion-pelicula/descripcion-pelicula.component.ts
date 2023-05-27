import { Component,OnInit } from '@angular/core';
import { DESCRIPCION_CATEGORIAS } from 'src/app/models/peliculas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-pelicula',
  templateUrl: './descripcion-pelicula.component.html',
  styleUrls: ['./descripcion-pelicula.component.css']
})
export class DescripcionPeliculaComponent implements OnInit  {
  peliculas= DESCRIPCION_CATEGORIAS;
  idPelicula:number=0;
  detallePelicula:any;

constructor(private activate: ActivatedRoute ){
}  
  ngOnInit(): void {
      this.idPelicula=this.activate.snapshot.params['id']
      this.peliculas.forEach((pelicula)=>{if (pelicula.id==this.idPelicula) {
        this.detallePelicula=pelicula;
      }})
  }

}
