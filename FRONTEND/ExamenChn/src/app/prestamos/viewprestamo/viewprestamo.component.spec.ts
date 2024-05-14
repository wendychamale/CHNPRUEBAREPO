import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprestamoComponent } from './viewprestamo.component';

describe('ViewprestamoComponent', () => {
  let component: ViewprestamoComponent;
  let fixture: ComponentFixture<ViewprestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
