import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownComponent } from '../dropdown/dropdown.component';


@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {

  @ViewChild('dropdown')dropdown!: ElementRef;

  constructor(private router: Router) {
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
    this.router.navigateByUrl('upload')
  }

  showBrowse() {
    this.router.navigateByUrl('browse')
  }

  navigateToSeries() {
    this.router.navigateByUrl('series')
  }

  navigateToMovie() {
    this.router.navigateByUrl('movies')
  }

  navigateToDocumentation() {
    this.router.navigateByUrl('documentations')
  }
}
