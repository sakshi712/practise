import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1> This is couunter increment </h1>
  <br>

  <button (click)="onClick()"> Click</button>
  <div>Counter {{counter}} </div>
  `,
  styles: [``]
})
export class CounterComponent implements OnInit {

  counter:number;
  onClick(){
    this.counter++;
    
    
  }
  constructor() {
    this.counter=100;
   }

  ngOnInit(): void {
  }

}
