import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPorSeccionComponent } from './peliculas-por-seccion.component';

describe('PeliculasPorSeccionComponent', () => {
  let component: PeliculasPorSeccionComponent;
  let fixture: ComponentFixture<PeliculasPorSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasPorSeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasPorSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
