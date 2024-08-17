import { HttpClientModule } from '@angular/common/http';
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
    @ViewChild('pwResetSuccess') pwResetSuccess!: ElementRef;
    newPassword: string = '';
    checkNewPassword: string = '';
    uid: string = '';
    token: string = '';

    constructor(private route: ActivatedRoute, private router: Router) {
        this.uid = this.route.snapshot.params['uid'];
        this.token = this.route.snapshot.params['token'];
    }

    checkPasswordAndCreateNewUser() {
        if (this.newPassword.length < 8) {
            alert('Das Passwort ist zu kurz. Es muss mindestens 8 Zeichen lang sein.')
        } else {
            if (this.newPassword === this.checkNewPassword) {
                this.resetPassword()
            } else {
                alert("Die Passwörter stimmen nicht überein!");
            }
        }
    }

    async resetPassword() {
        const url = `https://videoflix-backend.walter-doni.at/reset-password/${this.uid}/${this.token}/`;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    new_password: this.newPassword,
                }),
            });
            this.sendPwResetEmailSendSuccess();
        } catch (e) {
            alert(e);
        }
    }

    sendPwResetEmailSendSuccess() {
        const feedbackElement = this.pwResetSuccess.nativeElement;
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
