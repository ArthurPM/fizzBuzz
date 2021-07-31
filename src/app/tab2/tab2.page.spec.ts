import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('fizzBuzz should return 1', () => {
    expect(component.fizzBuzz(1)).toEqual('1');
  });

  it ('fizzBuzz should return Fizz', () => {
    expect(component.fizzBuzz(3)).toEqual('Fizz');
  });

  it ('fizzBuzz should return Buzz', () => {
    expect(component.fizzBuzz(5)).toEqual('Buzz');
  });

  it ('fizzBuzz should return FizzBuzz', () => {
    expect(component.fizzBuzz(15)).toEqual('FizzBuzz');
  });
});
