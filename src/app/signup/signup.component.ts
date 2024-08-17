import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('signUpSuccess') signUpSuccess!: ElementRef;

  username: string = '';
  email: string = '';
  password: string = '';
  checkPassword: string = '';

  constructor(private router: Router) {
  }

  checkPasswordAndCreateNewUser() {
    if (this.password.length < 8) {
      alert('Das Passwort ist zu kurz. Es muss mindestens 8 Zeichen lang sein.')
    } else {
      if (this.password === this.checkPassword) {
        this.createNewUserInBackend()
      } else {
        alert("Die Passwörter stimmen nicht überein!");
      }
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
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error) {
          this.checkError(errorData)
        }
      } else {
        this.showSuccessChangeValues();
      }
    } catch (e) {
      alert("Bitte kontrollieren Sie nochmals Ihre Eingabe");
    }
  }

  checkError(errorData: any) {
    const errorMessage = errorData.error.toLowerCase();
    if (errorMessage.includes("email") && errorMessage.includes("already registered")) {
      alert("Diese E-Mail-Adresse ist bereits registriert. Bitte verwende eine andere E-Mail-Adresse.");
    }
    else if (errorMessage.includes("username") && errorMessage.includes("already exists")) {
      alert("Dieser Benutzername ist bereits registriert. Bitte verwende einen anderen Benutzernamen.");
    }
  }

  showSuccessChangeValues() {
    const feedbackElement = this.signUpSuccess.nativeElement;
    feedbackElement.classList.add('show');
    setTimeout(() => {
      feedbackElement.classList.remove('show');
      this.goToLoginPage();
    }, 2000);
  }

  goToLoginPage() {
    this.router.navigateByUrl('');
  }

}
