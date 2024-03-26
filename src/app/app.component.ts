/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from "./races/races.component";
import { RaceComponent } from "./race/race.component";

@Component({
  selector: 'pr-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MenuComponent, RacesComponent, RaceComponent]
})
export class AppComponent {
  title = 'ponyracer';
}
