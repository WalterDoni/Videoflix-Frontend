import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-startscreen-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './startscreen-login.component.html',
  styleUrl: './startscreen-login.component.scss'
})
export class StartscreenLoginComponent {

  email: string = '';
  password: string = '';
  userID: string = '';
  username: string = '';

  constructor(private router: Router) {
  }

  async userLogin() {
    const url = `https://videoflix-backend.walter-doni.at/login/`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error) {
          this.checkError(errorData)
        }
      } else {
        const data = await response.json();
        this.userID = data.user_id;
        this.router.navigateByUrl(`browse/${this.userID}`);
      }
    } catch (e) {
      alert("Bitte kontrolliere nochmal deine Eingabe")
    }
  }

  async guestLogin() {
    this.email = "gast@gast.at";
    this.password = "Gast1234";
    this.userLogin()
  }

  checkError(errorData: any) {
    const errorMessage = errorData.error.toLowerCase();
    if (errorMessage.includes("email") && errorMessage.includes("not verified")) {
      alert("Diese E-Mail-Adresse ist noch nicht verifiziert, bitte überprüfe deine E-Mails.");
    } else if (errorMessage.includes("password") && errorMessage.includes("is wrong")) {
      alert("Das Passwort stimmt nicht.");
    } else if (errorMessage.includes("email") && errorMessage.includes("does not exist")) {
      alert("Kein Account mit dieser E-Mail-Adresse gefunden.");
    }
  }

  //--Navigation--//
  showDataprotection() {
    this.router.navigateByUrl('dataprotection');
  }

  showImprint() {
    this.router.navigateByUrl('imprint');
  }

  showSignup() {
    this.router.navigateByUrl('signup');
  }

  showForgotPassword() {
    this.router.navigateByUrl('forgot-password');
  }




}
