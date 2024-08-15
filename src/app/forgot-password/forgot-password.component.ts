import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
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
  newPassword: string = '';
  uid: string = '';
  token: string = '';
  email: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
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
  
      if (response.ok) {
        alert('Eine E-Mail zum Zurücksetzen des Passworts wurde gesendet.');
      } else {
        const errorData = await response.json();
        alert(`Fehler: ${errorData.error || 'Unbekannter Fehler'}`);
      }
    } catch (e) {
      alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
    }
  }
  

  goToLoginPage() {
    this.router.navigateByUrl('');
  }

}
