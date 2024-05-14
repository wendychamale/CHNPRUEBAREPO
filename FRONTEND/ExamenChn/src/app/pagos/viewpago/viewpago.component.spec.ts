import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpagoComponent } from './viewpago.component';

describe('ViewpagoComponent', () => {
  let component: ViewpagoComponent;
  let fixture: ComponentFixture<ViewpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
