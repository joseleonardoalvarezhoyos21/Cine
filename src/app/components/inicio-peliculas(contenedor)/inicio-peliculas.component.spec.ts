import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPeliculasComponent } from './inicio-peliculas.component';

describe('InicioPeliculasComponent', () => {
  let component: InicioPeliculasComponent;
  let fixture: ComponentFixture<InicioPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
