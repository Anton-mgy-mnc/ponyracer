/* eslint-disable prettier/prettier */
import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pr-menu',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  navbarCollapsed = true;


  toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
