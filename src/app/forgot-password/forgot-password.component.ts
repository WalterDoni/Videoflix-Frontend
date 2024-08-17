import { HttpClientModule } from '@angular/common/http';
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
  @ViewChild('pwResetEmailSendSuccess') pwResetEmailSendSuccess!: ElementRef;

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
      }); if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error) {
          this.checkError(errorData)
        }
      } else {
        this.sendPwResetEmailSendSuccess();
      }
    } catch (e) {
      alert(e);
    }
  }

  checkError(errorData: any) {
    const errorMessage = errorData.error.toLowerCase();
    if (errorMessage.includes("no user found with this email address")) {
      alert("Kein Account mit dieser E-Mail-Adresse gefunden.");
    }
  }

  sendPwResetEmailSendSuccess() {
    const feedbackElement = this.pwResetEmailSendSuccess.nativeElement;
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
