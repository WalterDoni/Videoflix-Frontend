import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [HeaderMenuComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @ViewChild('updateContainer') updateContainer!: ElementRef;
  @ViewChild('changedUsername') changedUsername!: ElementRef;
  @ViewChild('changedEmail') changedEmail!: ElementRef;
  @ViewChild('changesFeedback') changesFeedback!: ElementRef;

  userID: string = 'error';
  username: string = 'error';
  email: string = 'error';

  constructor(private router: Router, private route: ActivatedRoute, private header: HeaderMenuComponent) {
  }

  ngOnInit(): void {
    const userIdFromRoute = this.route.snapshot.paramMap.get('userId');
    if (userIdFromRoute) {
      this.userID = userIdFromRoute;
      this.getUsernameWithUserID();
    }
  }

  navigateToStartscreen() {
    this.router.navigateByUrl('');
  }

  navigateToProfile() {
    this.router.navigateByUrl('profile');
  }

  toggleUpdateContainer() {
    const updateElement = this.updateContainer.nativeElement;
    if (updateElement.classList.contains("d-none")) {
      updateElement.classList.remove("d-none");
    } else {
      updateElement.classList.add("d-none")
    }
  }

  toggleDropdown() {
    const dropdownElement = this.header.dropdown.nativeElement;
    if (dropdownElement.classList.contains("d-none")) {
      dropdownElement.classList.remove("d-none");
    } else {
      dropdownElement.classList.add("d-none");
    }
  }

  showSuccessChangeValues(){
    const feedbackElement = this.changesFeedback.nativeElement;
    feedbackElement.classList.add('show');
    setTimeout(() => {
      feedbackElement.classList.remove('show');
      this.toggleDropdown();
      this.toggleUpdateContainer();
      this.header.getUsernameWithUserID();
    }, 2000);
  }

  async changeUserValues() {
    this.username = this.changedUsername.nativeElement.value;
    this.email = this.changedEmail.nativeElement.value;
    const url = `http://35.232.116.50/users/${this.userID}/update/`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
        }),
      });
      if (response.ok) {
        await this.showSuccessChangeValues();
      }
    } catch (e) {
      alert(`Fehler: ${e}`);
    }
  }

  async getUsernameWithUserID() {
    const url = `http://35.232.116.50/users/${this.userID}/username/`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.username = data.username;
        this.email = data.email;
      } else {
        console.log('Failed to fetch username:', response.statusText);
      }
    } catch (error) {
      console.log('Error fetching username:', error);
    }
  }
}
