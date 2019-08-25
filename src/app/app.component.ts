import { Component } from '@angular/core';
import { EventEmitterService } from './event-emitter.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ HeroDetailComponent ]
})

export class AppComponent {
    title = 'Tour of Heroes';

    constructor(private eventEmitter: EventEmitterService ) { }

    saveHeroFunction() {
        this.eventEmitter.saveHero();
    }

    deleteHeroFunction() {
      this.eventEmitter.deleteHero();
  }
}
