import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [DropdownComponent],

  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {

  @ViewChild('dropdown') dropdown!: ElementRef;
  userID: string = 'error';
  username: string = 'error';

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
    const url = `http://127.0.0.1:8000/users/${this.userID}/username/`;
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
      } else {
        console.log('Failed to fetch username:', response.statusText);
      }
    } catch (error) {
      console.log('Error fetching username:', error);
    }
  }

  toggleDropdown() {
    const dropdownElement = this.dropdown.nativeElement;
    if (dropdownElement.classList.contains("d-none")) {
      dropdownElement.classList.remove("d-none");
    } else {
      dropdownElement.classList.add("d-none");
    }
  }

  navigateToUpload() {
    this.router.navigateByUrl(`upload/${this.userID}`)
  }

  showBrowse() {
    this.router.navigateByUrl(`browse/${this.userID}`)
  }

  navigateToSeries() {
    this.router.navigateByUrl(`series/${this.userID}`)
  }

  navigateToMovie() {
    this.router.navigateByUrl(`movies/${this.userID}`)
  }

  navigateToDocumentation() {
    this.router.navigateByUrl(`documentations/${this.userID}`)
  }
}
