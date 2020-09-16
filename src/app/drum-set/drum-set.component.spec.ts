import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumSetComponent } from './drum-set.component';

describe('DrumSetComponent', () => {
  let component: DrumSetComponent;
  let fixture: ComponentFixture<DrumSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
