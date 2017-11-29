import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceItemComponent } from './trace-item.component';

describe('TraceItemComponent', () => {
  let component: TraceItemComponent;
  let fixture: ComponentFixture<TraceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
