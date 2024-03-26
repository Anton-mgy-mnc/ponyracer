/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from "./races/races.component";

@Component({
  selector: 'pr-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MenuComponent, RacesComponent]
})
export class AppComponent {
  title = 'ponyracer';
}
