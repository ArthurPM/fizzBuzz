import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  fizzBuzz(iteration: number): string {
    let result = '';

    if (iteration % 3 === 0) {
      result += 'Fizz';
    }
    if (iteration % 5 === 0) {
      result += 'Buzz';
    }
    if (!result) {
      result += iteration;
    }
    return result;
  }
}
