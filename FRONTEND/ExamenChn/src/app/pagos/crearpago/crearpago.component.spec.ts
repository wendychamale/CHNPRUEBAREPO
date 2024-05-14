import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpagoComponent } from './crearpago.component';

describe('CrearpagoComponent', () => {
  let component: CrearpagoComponent;
  let fixture: ComponentFixture<CrearpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
