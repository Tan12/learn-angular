import { Component, OnInit } from '@angular/core';

import { Post } from '../model/post-model';

@Component({
  selector: 'postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  public searchText:string;

  public postList:Array<Post>;

  constructor() { }

  ngOnInit() {
  }

  public searchChanged($event):void{
	console.log(this.searchText);
  }

}
