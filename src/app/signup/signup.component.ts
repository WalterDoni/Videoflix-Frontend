import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  checkPassword: string = '';

  constructor(private router: Router) {

  }

  checkPasswordAndCreateNewUser() {
    if (this.password === this.checkPassword) {
      this.createNewUserInBackend()
    } else {
      alert("Die Passwörter stimmen nicht überein!");

    }
  }

  async createNewUserInBackend() {
    const url = `http://127.0.0.1:8000/signup/`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password,
          phone: "-",
          address: "-",
          zipcode: "-",
          city: "-",
          country: "-",
        }),
      });
      if (response.ok || response.status === 200) {
        this.goToLoginPage();
      }

    } catch (e) {
      alert("Bitte kontrollieren Sie nochmals Ihre Eingabe");
    }
  }


  goToLoginPage() {
    this.router.navigateByUrl('');
  }

}
