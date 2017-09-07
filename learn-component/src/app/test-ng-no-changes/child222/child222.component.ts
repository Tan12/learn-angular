import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'child222',
  templateUrl: './child222.component.html',
  styleUrls: ['./child222.component.css']
})
export class Child222Component implements OnInit {
  @Input()
  public userName: string = "";
  @Input()
  public userObj: any = {};

  public age: number = 18;

  constructor() { }

  ngOnInit() {
  }

}
