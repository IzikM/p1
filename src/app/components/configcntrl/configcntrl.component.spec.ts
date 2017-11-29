import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigcntrlComponent } from './configcntrl.component';

describe('ConfigcntrlComponent', () => {
  let component: ConfigcntrlComponent;
  let fixture: ComponentFixture<ConfigcntrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigcntrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigcntrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
