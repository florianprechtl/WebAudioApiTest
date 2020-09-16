import { Component, OnInit } from "@angular/core";
import { TweenMax, Power2 } from "gsap";

@Component({
  selector: "app-drum-set",
  templateUrl: "./drum-set.component.html",
  styleUrls: ["./drum-set.component.css"]
})
export class DrumSetComponent implements OnInit {
  mouseSurface;
  lastX;
  lastY;

  oscillator: OscillatorNode;
  audioContext: AudioContext;
  gainNode: GainNode;
  pannerNode: PannerNode;

  frequency = 0;

  constructor() {
    this.audioContext = new AudioContext();

    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.type = "sine";
    this.setFrequency(this.frequency);

    this.oscillator.connect(this.audioContext.destination);
    this.oscillator.start();
  }

  ngOnInit() {
    this.mouseSurface = document.getElementById("mouseSurface").parentElement;

    window.addEventListener("mousemove", e => {
      const x = e.clientX;
      const y = e.clientY;
      this.createParticle(x, y);
    });

    document.body.addEventListener("touchmove", e => {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      e.preventDefault();
      this.createParticle(x, y);
    });
  }

  setFrequency(frequency) {
    if (frequency < 0 || frequency > 400) {
      return;
    }
    this.frequency = frequency;
    this.oscillator.frequency.setValueAtTime(
      this.frequency,
      this.audioContext.currentTime
    );
    console.log(frequency);
  }

  createParticle(x, y) {
    const size = Math.random() * 50 + 10;

    x -= size / 2;
    y -= size / 2;

    const particle = document.createElement("div");
    let distance = 0;
    particle.classList.add("particle");
    if (this.lastX && this.lastY) {
      distance = Math.floor(
        (Math.pow(this.lastX - x, 2) + Math.pow(this.lastY - y, 2)) / 40
      );
    }
    this.lastX = x;
    this.lastY = y;
    this.mouseSurface.appendChild(particle);
    this.setFrequency(this.frequency + distance / 10);

    TweenMax.set(particle, {
      x: x,
      y: y,
      width: size,
      height: size,
      background: () => {
        return `hsl(${Math.random() * 90 + 200}, 50%, 50%)`;
      }
    });
    TweenMax.to(particle, Math.random() * 2 + 1, {
      x: x + (Math.random() - 0.5) * 200,
      y: y + (Math.random() - 0.5) * 200,
      opacity: 0,
      scale: 0,
      ease: Power2.easeOut,
      onComplete: () => {
        this.mouseSurface.removeChild(particle);
        this.setFrequency(this.frequency - distance / 10);
      }
    });
  }

  ngOnDestroy() {
    this.oscillator.stop();
  }
}
