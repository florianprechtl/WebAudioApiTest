import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-knob-to-effect-test",
  templateUrl: "./knob-to-effect-test.component.html",
  styleUrls: ["./knob-to-effect-test.component.css"]
})
export class KnobToEffectTestComponent implements OnInit, OnDestroy {
  oscillator: OscillatorNode;
  audioContext: AudioContext;
  gainNode: GainNode;
  pannerNode: PannerNode;

  frequency = new FormControl("");
  detune = new FormControl("");
  gain = new FormControl("");
  panner = new FormControl("");
  waveForm = new FormControl("");
  waveForms = ["sine", "square", "sawtooth", "triangle"];

  constructor() {
    this.frequency.patchValue(0);
    this.detune.patchValue(0);
    this.gain.patchValue(0);
    this.panner.patchValue(0);
    this.waveForm.patchValue("sine");

    this.audioContext = new AudioContext();

    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.type = this.waveForm.value;
    this.oscillator.frequency.setValueAtTime(
      this.frequency.value,
      this.audioContext.currentTime
    ); // value in hertz
    this.oscillator.detune.setValueAtTime(
      this.detune.value,
      this.audioContext.currentTime
    );

    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.setValueAtTime(
      this.gain.value,
      this.audioContext.currentTime
    );

    this.pannerNode = this.audioContext.createPanner();
    this.pannerNode.positionX.setValueAtTime(
      this.panner.value,
      this.audioContext.currentTime
    );

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.pannerNode);
    this.pannerNode.connect(this.audioContext.destination);

    this.oscillator.start();
    this.audioContext.resume().then(() => {
      console.log("Playback resumed successfully");
    });
  }

  ngOnInit() {
    this.frequency.valueChanges.subscribe(value => {
      this.oscillator.frequency.setValueAtTime(
        value,
        this.audioContext.currentTime
      );
    });
    this.detune.valueChanges.subscribe(value => {
      this.oscillator.detune.setValueAtTime(
        value,
        this.audioContext.currentTime
      );
    });
    this.waveForm.valueChanges.subscribe(value => {
      this.oscillator.type = value.value;
    });
    this.gain.valueChanges.subscribe(value => {
      this.gainNode.gain.setValueAtTime(
        value / 100,
        this.audioContext.currentTime
      );
    });
    this.panner.valueChanges.subscribe(value => {
      const newValue = value / 100;
      this.pannerNode.positionX.setValueAtTime(
        newValue,
        this.audioContext.currentTime
      );
    });
  }

  ngOnDestroy() {
    this.oscillator.stop();
  }

  onFrequencyChanged(value) {
    this.frequency.patchValue(value);
  }

  onDetuneChanged(value) {
    this.detune.patchValue(value);
  }

  onWaveFormChanged(value) {
    this.waveForm.patchValue(value);
  }

  onGainChanged(value) {
    this.gain.patchValue(value);
  }

  onPannerChanged(value) {
    this.panner.patchValue(value);
  }
}
