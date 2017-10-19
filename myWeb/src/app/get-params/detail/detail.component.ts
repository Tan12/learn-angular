import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

public itemsPerPage:number=5;
  public totalRecords:number=11;
  public currentPage:number=1;
  public offset:number=0;
  public end:number=0;

  info: Array<Object>; //对象数组
  infoList: Array<Object>;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
    this.info = [{
            "id": 1,
            "name": "html"
        },{
            "id": 2,
            "name": "css"
        },{
            "id": 3,
            "name": "jquey"
        },{
            "id": 4,
            "name": "angular"
        },{
            "id": 5,
            "name": "ionic"
        },{
            "id": 6,
            "name": "angular2"
        },{
            "id": 7,
            "name": "ionic2"
        },{
            "id": 8,
            "name": "react"
        },{
            "id": 9,
            "name": "node"
        },{
            "id": 10,
            "name": "webpack"
        },{
            "id": 11,
            "name": "typescript"
    }];
  }

  ngOnInit() {
    let url = window.location.href.split('/');
    console.log(url[url.length-1]);
    this.currentPage = parseInt(url[url.length-1]);
    this.loadData();

  	// 从路由里面获取URL参数
  	// 我也不知道为啥我获取不到参数
	/*this.activeRoute.params.subscribe(params => {
	  console.log(params);
	  this.currentPage = params.id;
	  this.loadData();
	});*/
  }

  public loadData(){
	this.offset = (this.currentPage-1)*this.itemsPerPage;
	this.end = (this.currentPage)*this.itemsPerPage;
	this.infoList = this.info.slice(this.offset, this.end>this.totalRecords?this.totalRecords:this.end);
  }

  public pageChanged(event:any):void {
    let temp = parseInt(event.page)+1;
    console.log(temp);
    this.router.navigateByUrl("getparams/page/"+temp);
  }

}
