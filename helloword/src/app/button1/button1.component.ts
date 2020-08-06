import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button1',
  template:`
  <button  [class]="istrue?'like':'unlike'" (click)="onClick()">Like</button>
  <div>{{counter}}</div>
  `,
  styles: [`
  .like{
    color:black;
    background-color:green;
  }
  .unlike{
    color:black;
    background-color:red;
  }
  `]
})
export class Button1Component implements OnInit {
counter=0;
istrue=false
onClick(){
  if(this.istrue==false){
  this.counter++;
  this.istrue=true;
  }
else{
  this.counter--;
  this.istrue=false;
}
}
  constructor() { }

  ngOnInit(): void {
  }

}
