import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(route: ActivatedRoute) {
    const id: Observable<string> = route.params.map(p => p.id);
    const url: Observable<string> = route.url.map(segments => segments.join(''));
    // route.data includes both `data` and `resolve`
    const user = route.data.map(d => d.user);
    console.log(id);
    console.log(url);
    console.log(user);
  }
}
