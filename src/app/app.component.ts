import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ncc';

  constructor(private router: Router) {
   // @ts-ignore
    void this.router.navigate(["/news"])
  }

  matchRouter(route: string) {
    return location && location.href.includes(route)
  }
}
