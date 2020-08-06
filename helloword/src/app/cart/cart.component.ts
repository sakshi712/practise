import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
  <h1>TODO LIST</h1>
  <br>
  <input [(ngModel)]='name' type="text">
  <br>
  <button (click)="show()">Add Task</button>
  <div>
  <ul>
  <li *ngFor="let i of items">
     {{i}} 
     </li>
     </ul>
     
     </div>
  `,
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
name="";
items=[];
counter=0;
show(){
 this.items[this.counter]=this.name;
 this.counter++;
}
  constructor() { }

  ngOnInit(): void {
  }

}
