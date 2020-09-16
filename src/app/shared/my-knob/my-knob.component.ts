import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { KnobComponent } from "ng2-knob";

@Component({
  selector: "app-my-knob",
  templateUrl: "./my-knob.component.html",
  styleUrls: ["./my-knob.component.css"]
})
export class MyKnobComponent implements OnInit {
  private privateValue = 0;

  @Input()
  set value(value: number) {
    this.privateValue = value;
    this.valueChange.emit(value);
  }
  get value(): number {
    return this.privateValue;
  }

  @Input() initialValue = 0;
  @Input() title;
  @Input() startDegree = 200;
  @Input() endDegree = 120;
  @Input() max = 100;
  @Input() min = 0;

  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  @ViewChild("knob", { static: false }) knob: KnobComponent;

  constructor() {}

  ngOnInit() {
    this.value = this.initialValue;
  }
}
