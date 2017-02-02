import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CountingService {

  private count: number = 0; // initial count value
  private subject = new BehaviorSubject<Number>(this.count);

  // A subject is a special type of observable that is also an observer, so you can send values in addition to subscribing to it.
  // Behavior subject needs a initial value as it must always return a value on subscription even if it hasn't received a next().

  increase() {
    this.subject.next(++this.count);
  }

  decrease() {
    this.subject.next(--this.count);
  }

  getCount(): Observable<any> {
    return this.subject.asObservable();
  }
}
