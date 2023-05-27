import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionPeliculaComponent } from './descripcion-pelicula.component';

describe('DescripcionPeliculaComponent', () => {
  let component: DescripcionPeliculaComponent;
  let fixture: ComponentFixture<DescripcionPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
