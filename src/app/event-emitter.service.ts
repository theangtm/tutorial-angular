import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeFunction = new EventEmitter();
  invokeSubscription: Subscription;

  constructor() { }

  saveHero() {
    this.invokeFunction.emit();
    console.log('saveHero');
  }
}
