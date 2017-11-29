import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalityItemComponent } from './vitality-item.component';

describe('VitalityItemComponent', () => {
  let component: VitalityItemComponent;
  let fixture: ComponentFixture<VitalityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalityItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
