import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username: string = '';
  password: string = '';
  defaultUsername = 'admin';
  defaultPassword = 'admin';
constructor(private router:Router) {}
  login() {
   if (this.username === this.defaultUsername && this.password === this.defaultPassword) {
      alert('Login successful!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }

  }
}
