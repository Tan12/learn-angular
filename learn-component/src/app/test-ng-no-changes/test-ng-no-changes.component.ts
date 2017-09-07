import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-no-changes',
  templateUrl: './test-ng-no-changes.component.html',
  styleUrls: ['./test-ng-no-changes.component.css']
})
export class TestNgNoChangesComponent implements OnInit {
  public userName:string="默认用户1";
  public userObj:any={userName:'默认用户2'};
  
  constructor() { }

  ngOnInit() {
  }

}
