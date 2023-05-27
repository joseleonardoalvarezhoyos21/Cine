import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionComponentesComponent } from './seccion-componentes.component';

describe('SeccionComponentesComponent', () => {
  let component: SeccionComponentesComponent;
  let fixture: ComponentFixture<SeccionComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionComponentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
