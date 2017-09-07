import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  public title:string="默认的标题";

  @Output()
  btnClick:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public triggerEvent():void{
    // 发送消息给父组件
    this.btnClick.emit("第一个子组件的点击事件...");
    //console.log(23);
  }

}
