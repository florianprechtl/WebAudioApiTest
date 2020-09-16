import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-pause',
  templateUrl: './play-pause.component.html',
  styleUrls: ['./play-pause.component.css']
})
export class PlayPauseComponent implements OnInit {
  title = 'web-audio-api-test';

  audioContext: AudioContext;
  source: AudioBufferSourceNode;
  audioBuffer: AudioBuffer;

  startTime = 0;
  startOffset = 0;

  playing = false;

  constructor() {
    this.audioContext = new AudioContext();
    const url = '/assets/sounds/sound.wav';
    this.loadSound(url);
  }

  ngOnInit() {

  }

  loadSound(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = () => {
      this.audioContext.decodeAudioData(request.response, (buffer) => {
        this.audioBuffer = buffer;
      }, this.onError);
    };

    request.send();
  }

  play() {
    if (!this.playing) {
      this.playing = true;

      this.startTime = this.audioContext.currentTime;
      this.source = this.audioContext.createBufferSource();
      this.source.buffer = this.audioBuffer;
      this.source.loop = true;

      this.source.connect(this.audioContext.destination);
      this.source.start(0, this.startOffset % this.audioBuffer.duration);
    }
  }

  stop() {
    if (this.playing) {
      this.playing = false;
      this.startOffset += this.audioContext.currentTime - this.startTime;
      this.source.stop();
    }
  }

  onError(error) {
    alert('error');
    console.log(error);
  }

}
