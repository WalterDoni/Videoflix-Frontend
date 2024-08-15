import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  @ViewChild('newPassword') newPassword!: ElementRef;
  uid: string = '';
  token: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.uid = this.route.snapshot.params['uid'];
    this.token = this.route.snapshot.params['token'];
  }

  async resetPassword() {
    const newPasswordValue = this.newPassword.nativeElement.value;
    const url = `https://videoflix-backend.walter-doni.at/reset-password/${this.uid}/${this.token}/`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                new_password: newPasswordValue,
            }),
        });

        if (response.ok) {
            alert('Password has been reset successfully.');
            this.router.navigateByUrl('login'); // Redirect to login page or another page
        } else {
            const errorData = await response.json();
            alert(errorData.error || 'Failed to reset password.');
        }
    } catch (e) {
        alert('An error occurred. Please try again later.');
    }
}

}
