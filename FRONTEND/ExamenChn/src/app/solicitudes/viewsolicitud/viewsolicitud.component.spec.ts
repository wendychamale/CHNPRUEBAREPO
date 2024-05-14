import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsolicitudComponent } from './viewsolicitud.component';

describe('ViewsolicitudComponent', () => {
  let component: ViewsolicitudComponent;
  let fixture: ComponentFixture<ViewsolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
