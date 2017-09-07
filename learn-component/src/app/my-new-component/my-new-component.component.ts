import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.scss'],
  // 设置该组件的变化检测策略为onPush
  // OnPush, 表示变化检测对象的状态为`CheckOnce` 
  // Default, 表示变化检测对象的状态为`CheckAlways`
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MyNewComponentComponent implements OnInit {
  public logs: Array<string> = [];

  @Input()
  public title:string="";

  constructor() {
    this.logs.push("constructor...");
  }

  ngOnInit() {
    this.logs.push("ngOnInit...");
  }

  ngOnChanges() {
    this.logs.push("ngOnChanges...");
  }

  ngDoCheck() {
    this.logs.push("ngDoCheck...");
  }

  ngAfterContentInit() {
    this.logs.push("ngAfterContentInit...");
  }

  ngAfterContentChecked() {
    this.logs.push("ngAfterContentChecked...");
  }

  ngAfterViewInit() {
    this.logs.push("ngAfterViewInit...");
  }

  ngAfterViewChecked() {
    this.logs.push("ngAfterViewChecked...");
  }

  ngOnDestory() {
    this.logs.push("ngOnDestory...");
  }

}
