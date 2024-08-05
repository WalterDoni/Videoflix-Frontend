import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  userID: string = '';
  username: string = '';
  email: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const userIdFromRoute = this.route.snapshot.paramMap.get('userId');
    if (userIdFromRoute) {
      this.userID = userIdFromRoute;
      this.getUsernameWithUserID();
    }
  }

  async getUsernameWithUserID() {
    const url = `https://videoflix-backend.walter-doni.at/users/${this.userID}/username/`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      this.username = data.username;
      this.email = data.email;
    } catch (error) {
      console.log('Error fetching username:', error);
    }
  }

  showDataprotection() {
    this.router.navigateByUrl('dataprotection');
  }

  showImprint() {
    this.router.navigateByUrl('imprint');
  }

  showContactformular() {
    this.router.navigateByUrl(`contact/${this.userID}`);
  }
}
