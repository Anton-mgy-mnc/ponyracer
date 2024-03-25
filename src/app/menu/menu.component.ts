import { Component } from '@angular/core';

@Component({
  selector: 'pr-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  navbarCollapsed = true;


  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
