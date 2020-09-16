import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DrumSetComponent } from './drum-set/drum-set.component';
import { PlayPauseComponent } from './play-pause/play-pause.component';
import { KnobTestComponent } from './knob-test/knob-test.component';
import { KnobToEffectTestComponent } from './knob-to-effect-test/knob-to-effect-test.component';

const appRoutes: Routes = [
  { path: 'drum-set', component: DrumSetComponent },
  { path: 'play-pause', component: PlayPauseComponent },
  { path: 'knob-test', component: KnobTestComponent },
  { path: 'knob-to-effect-test', component: KnobToEffectTestComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
