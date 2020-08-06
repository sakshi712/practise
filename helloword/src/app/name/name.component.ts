import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `
  Enter Name:<input  [(ngModel)]="name" type="text">
  <button (click)="onClick()">Click</button>
  <br>
  <div>{{message}}</div>
  `,
  styles: [``]
})
export class NameComponent implements OnInit {
name="";
message="";
onClick(){
  if(this.name=="Ramu"){
    this.message="welcome Admin"
  }
  else{
     this.message="welcome "+this.name;
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
