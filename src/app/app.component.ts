/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pr-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MenuComponent, RouterOutlet]
})
export class AppComponent {
}
