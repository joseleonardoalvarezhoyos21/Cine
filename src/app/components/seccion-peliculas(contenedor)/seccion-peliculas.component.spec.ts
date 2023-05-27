import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPeliculasComponent } from './seccion-peliculas.component';

describe('SeccionPeliculasComponent', () => {
  let component: SeccionPeliculasComponent;
  let fixture: ComponentFixture<SeccionPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
