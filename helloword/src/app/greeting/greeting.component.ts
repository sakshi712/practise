import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `
  <input [(ngModel)]="name" type="text">
  <br>
  <button  (click)="show()">Click</button>
  <br>
  <span class=c1 >{{greet}} </span> <span class=c2>{{name}}</span>

  `,
  styles: [`
  .c1{
    color:blue;
  }
  .c2{
    color:green;
  }
  `  ]
})
export class GreetingComponent implements OnInit {
  name="";
  greet:string;
  greeting=["Hello", "Hi", "Namaste"];
 // s=['class="apple"','class="orange"','class="pear"']
  a=this.greeting.length;
  counter=0;
  show(){
   this.counter++;
   if(this.counter==this.a){
     this.counter=0;
   }
   if(this.counter<this.a){
    this.greet=this.greeting[this.counter]
   }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
