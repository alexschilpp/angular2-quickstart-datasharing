import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CountingService } from './counting.service';

@Component({
  selector: 'component-b',
  template: `<h2>{{title}}</h2>
             <p>Shared count: {{count}}</p>
             <button (click)="decreaseCount()">-</button><button (click)="increaseCount()">+</button>`,
})

export class ComponentB implements OnInit, OnDestroy {

  @Output() clicked = new EventEmitter();

  private title: string = "Component B";
  private count: Number;
  private countSubscription: Subscription;

  constructor(private countingService: CountingService) {}

  increaseCount() {
    this.countingService.increase();
    this.emitTitle();
  }

  decreaseCount() {
    this.countingService.decrease();
    this.emitTitle();
  }

  emitTitle() {
    this.clicked.emit(this.title);
  }

  ngOnInit() {
    let count$ = this.countingService.getCount();

    this.countSubscription = count$.subscribe(count => {
      this.count = count;
    })
  }

  ngOnDestroy() {
    this.countSubscription.unsubscribe();
  }

}
