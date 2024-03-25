import { Component } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'pr-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MenuComponent]
})
export class AppComponent {
  title = 'ponyracer';
}
