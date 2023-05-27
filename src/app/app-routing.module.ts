import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionPeliculaComponent } from './components/descripcion-pelicula/descripcion-pelicula.component';
import { InicioPeliculasComponent } from './components/inicio-peliculas(contenedor)/inicio-peliculas.component';
import { SeccionPeliculasComponent } from './components/seccion-peliculas(contenedor)/seccion-peliculas.component';

const routes: Routes = [
  {path:'',component:InicioPeliculasComponent},
  {path:'seccion/:idSeccion',component:SeccionPeliculasComponent},
  {path: 'peliculaDetalle/:id',component:DescripcionPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
