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
    const url = `https://videoflix-backend.walter-doni.at/signup/`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.username.trim(),
                email: this.email.trim(),
                password: this.password,
            }),
        });
        if (response.ok) {
            this.goToLoginPage();
        } else {
            const errorData = await response.json();
            alert(`Fehler: ${JSON.stringify(errorData)}`);
        }
    } catch (e) {
        alert("Bitte kontrollieren Sie nochmals Ihre Eingabe");
    }
}



  goToLoginPage() {
    this.router.navigateByUrl('');
  }

}
