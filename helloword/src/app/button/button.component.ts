import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button [class]="{'done':isGreen}" (click)="onClick()">Click</button>
  <div> Counter: {{counter}}</div>
  
  `,
  styles: [`
  .done{
  color:black;
  background-color:green;
  }
  `]
})
export class ButtonComponent implements OnInit {
isGreen=false;
  counter=1;
  onClick(){
    this.counter++;
    if(this.counter==15){
      this.isGreen=true;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
