import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearsolicitudComponent } from './crearsolicitud.component';

describe('CrearsolicitudComponent', () => {
  let component: CrearsolicitudComponent;
  let fixture: ComponentFixture<CrearsolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearsolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
