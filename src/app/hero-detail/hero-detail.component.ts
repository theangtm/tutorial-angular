import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})

export class HeroDetailComponent implements OnInit, OnDestroy {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private eventEmitter: EventEmitterService
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.eventEmitter.invokeSubscription = this.eventEmitter.invokeFunction.subscribe(() =>  {
      this.save();
    });
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
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

  ngOnDestroy(): void {
    this.eventEmitter.invokeSubscription.unsubscribe();
  }

}
