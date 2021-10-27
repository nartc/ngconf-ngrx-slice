import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CounterComponent } from "./counter.component";
import { CounterEffects } from "./store/counter.effects";
import { CounterFeature } from "./store/counter.slice";

const counterRoutes: Routes = [{ path: "", component: CounterComponent }];

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(counterRoutes),
    StoreModule.forFeature(CounterFeature),
    EffectsModule.forFeature([CounterEffects]),
  ],
})
export class CounterModule {}
