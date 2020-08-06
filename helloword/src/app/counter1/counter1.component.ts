import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter1',
  template: `
  <button class="like-button"  [class]="{'liked':likebutton}" (click)="onClick()">Like| </button>
  <span class="likes-counter">{{counter}}</span>

  `,
  styles: [``]
})
export class Counter1Component implements OnInit {
counter=100;
likebutton=false;
onClick(){
  if(this.likebutton==false){
    this.counter++;
    this.likebutton=true;
  }
  else{
    this.counter--;
    this.likebutton=false;
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
