import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  template: `
    <input
      type="text"
      (keyup.enter)="onEnter()"
      [(ngModel)]="text"
      placeholder="Enter to add todo..."
    />

    <br />
    <p>Todo List</p>
    <ul>
      <li (click)="onToggle()">
        <span>First todo</span>
        <button type="button" (click)="$event.stopPropagation(); onDelete()">
          x
        </button>
      </li>
    </ul>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  text = "";

  constructor() {}

  ngOnInit(): void {}

  onEnter() {}

  onDelete() {}

  onToggle() {}
}
