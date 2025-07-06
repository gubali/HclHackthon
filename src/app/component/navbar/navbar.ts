import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(private router: Router) {}
  logout(): void {
    console.log('User logged out');
    this.router.navigate(['/login']);
  }
}
