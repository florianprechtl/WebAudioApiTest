import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnobTestComponent } from './knob-test.component';

describe('KnobTestComponent', () => {
  let component: KnobTestComponent;
  let fixture: ComponentFixture<KnobTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnobTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnobTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
