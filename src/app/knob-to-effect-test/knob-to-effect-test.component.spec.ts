import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnobToEffectTestComponent } from './knob-to-effect-test.component';

describe('KnobToEffectTestComponent', () => {
  let component: KnobToEffectTestComponent;
  let fixture: ComponentFixture<KnobToEffectTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnobToEffectTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnobToEffectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
