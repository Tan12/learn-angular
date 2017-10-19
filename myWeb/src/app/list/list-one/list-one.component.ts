import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-one',
  templateUrl: './list-one.component.html',
  styleUrls: ['./list-one.component.css']
})
export class ListOneComponent implements OnInit {
  public name: string = 'list-one';

  constructor() { }

  ngOnInit() {
  }

}
