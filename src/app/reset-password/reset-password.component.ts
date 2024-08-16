import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
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
    newPassword: string = '';
    checkNewPassword: string = '';
    uid: string = '';
    token: string = '';

    constructor(private route: ActivatedRoute, private router: Router) {
        this.uid = this.route.snapshot.params['uid'];
        this.token = this.route.snapshot.params['token'];
    }

    checkPasswordAndCreateNewUser() {
        if (this.newPassword === this.checkNewPassword) {
            this.resetPassword();
        } else {
            alert("Die Passwörter stimmen nicht überein!");
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
            alert('Das Passwort wurde geändert');
            this.router.navigateByUrl('');
        } catch (e) {
            alert(e);
        }
    }

}
