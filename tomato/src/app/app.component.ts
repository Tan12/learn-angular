import { Component, HostListener, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public router: Router,
	public activatedRoute: ActivatedRoute
  ){}

  ngOnInit() {}

  toggle(button: any) {
	console.log(button);
  }
}
