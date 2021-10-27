import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Angular Meetup NgRx Slice</h1>
    <ul>
      <li>
        <a routerLink="/counter">Counter</a>
      </li>
      <li>
        <a routerLink="/todo">Todo</a>
      </li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "ngrx-slice-ng-conf";
}
