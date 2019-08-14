import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Globals } from '../globals';
import { EventEmitterService } from '../event-emitter.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  // currentHero$ = new BehaviorSubject( );

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private globals: Globals,
    private eventEmitter: EventEmitterService
  ) { }

  ngOnInit(): void {
    this.getHero();
    if (this.eventEmitter.invokeSubscription === undefined) {
      this.eventEmitter.invokeSubscription = this.eventEmitter.invokeFunction.subscribe(() =>  {
        this.save();
        console.log('event emit', this.hero);
        // after initial save keeps returning same hero????
       });
    }
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
        this.globals.heroEditable = true;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.log('save hero', this.hero);
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
