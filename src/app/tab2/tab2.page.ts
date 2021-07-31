import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  testResults = [];

  constructor() {}

  ngOnInit() {
    this.generateFizzBuzzResults();
  }

  generateFizzBuzzResults() {
    for (let index = 1; index <= 100; index++) {
      this.testResults.push(this.fizzBuzz(index));
    }
  }

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
