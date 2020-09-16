import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKnobComponent } from './my-knob.component';

describe('MyKnobComponent', () => {
  let component: MyKnobComponent;
  let fixture: ComponentFixture<MyKnobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyKnobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyKnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
