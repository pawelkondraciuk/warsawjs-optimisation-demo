import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import repeat from 'lodash-es/repeat';

import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  counter$: Observable<string>;

  constructor() {
    this.counter$ = Observable
        .timer(0, 1000)
        .map((i) => i % 5 + 1)
        .map((i) => repeat('*', i));
  }
}
