import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    height: null,
    weight: null,
    gender: '',
    age: null
  }

  constructor(private authService: AuthenticationService, private router: Router){}

  onSubmit(){
    if (this.user.password === this.user.password_confirmation){
      this.authService.signUp(this.user).subscribe({
        next: (res: any) => {
          console.log('User signed up', res);
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.error('Signup error', error);
        }
      });
    } else {
      console.error('Passwords do not match');
    }
  }
}
