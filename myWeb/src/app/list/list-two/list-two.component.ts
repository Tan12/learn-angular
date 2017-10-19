import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-two',
  templateUrl: './list-two.component.html',
  styleUrls: ['./list-two.component.css']
})
export class ListTwoComponent implements OnInit {
  public name: string = 'list-two';

  constructor() { }

  ngOnInit() {
  }

}
