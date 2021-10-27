import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "counter" },
  {
    path: "counter",
    loadChildren: () =>
      import("./counter/counter.module").then((m) => m.CounterModule),
  },
  {
    path: "todo",
    loadChildren: () => import("./todo/todo.module").then((m) => m.TodoModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
