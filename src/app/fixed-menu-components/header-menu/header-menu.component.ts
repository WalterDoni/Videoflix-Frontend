import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {

  constructor(private router: Router) {
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