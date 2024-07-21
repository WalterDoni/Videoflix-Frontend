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
  navigateToStartscreen(){
    this.router.navigateByUrl('');
  }

  navigateToProfile(){
    this.router.navigateByUrl('profile');
  }

  toggleUpdateContainer(){
    const updateElement = this.updateContainer.nativeElement;
    if (updateElement.classList.contains("d-none")){
      updateElement.classList.remove("d-none");
    }else {
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
