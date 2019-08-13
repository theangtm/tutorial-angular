import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Globals } from './globals';
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

    constructor(private globals: Globals, public router: Router, private eventEmitter: EventEmitterService ) {
        router.events.pipe(
            filter(e => e instanceof RouterEvent)
        ).subscribe(e => {
            this.globals.heroEditable = false;
        });
    }

    saveFunction() {
        this.eventEmitter.saveHero();
    }
}
