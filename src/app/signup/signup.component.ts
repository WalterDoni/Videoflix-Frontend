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
      this.showSuccessChangeValues();
    } catch (e) {
      alert("Bitte kontrollieren Sie nochmals Ihre Eingabe");
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
