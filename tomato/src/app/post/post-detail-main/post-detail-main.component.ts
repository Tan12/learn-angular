import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'post-detail-main',
  templateUrl: './post-detail-main.component.html',
  styleUrls: ['./post-detail-main.component.css'],
  animations: [
    flyIn
  ]
})
export class PostDetailMainComponent implements OnInit {

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
