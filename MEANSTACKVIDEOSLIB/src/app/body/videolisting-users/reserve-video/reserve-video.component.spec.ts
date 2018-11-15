import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveVideoComponent } from './reserve-video.component';

describe('ReserveVideoComponent', () => {
  let component: ReserveVideoComponent;
  let fixture: ComponentFixture<ReserveVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
