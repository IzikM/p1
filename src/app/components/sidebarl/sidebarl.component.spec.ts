import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarlComponent } from './sidebarl.component';

describe('SidebarlComponent', () => {
  let component: SidebarlComponent;
  let fixture: ComponentFixture<SidebarlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
