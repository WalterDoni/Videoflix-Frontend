import {HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  uid: string = '';
  token: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.uid = this.route.snapshot.params['uid'];
    this.token = this.route.snapshot.params['token'];
  }

  async sendPasswordResetEmail() {
    const url = `https://videoflix-backend.walter-doni.at/password-reset/`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email.trim(),
        }),
      });
      alert('Eine E-Mail zum Zurücksetzen des Passworts wurde gesendet.');
      this.router.navigateByUrl('');
    } catch (e) {
      alert(e);
    }
  }


  goToLoginPage() {
    this.router.navigateByUrl('');
  }

}
