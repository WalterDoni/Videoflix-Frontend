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
    const url = `http://35.232.116.50/login/`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.email, // E-Mail-Feld beibehalten
                password: this.password
            }),
        });
        if (response.ok || response.status === 200) {
            const data = await response.json();

            this.userID = data.user_id;
            this.router.navigateByUrl(`browse/${this.userID}`);
        }
    } catch (e) {
        alert("Bitte kontrollieren Sie nochmal Ihre Eingabe")
    }
}

  async guestLogin() {
    const url = `http://35.232.116.50/login/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "gast@gast.at",
        password: "Gast1234",
      }),
    });
    if (response.ok || response.status === 200) {
      const data = await response.json();
      this.userID = data.user_id;
      this.username = data.username;
      this.router.navigateByUrl(`browse/${this.userID}`);
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




}
