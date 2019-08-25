import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeFunctionSave = new EventEmitter();
  invokeFunctionDelete = new EventEmitter();
  invokeSubscriptionSave: Subscription;
  invokeSubscriptionDelete: Subscription;

  constructor() { }

  saveHero() {
    this.invokeFunctionSave.emit();
  }

  deleteHero() {
    this.invokeFunctionDelete.emit();
  }
}
