
import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../fixed-menu-components/header-menu/header-menu.component';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-profile',
  standalone: true,
  imports: [HeaderMenuComponent, FooterComponent],
  templateUrl: './change-profile.component.html',
  styleUrl: './change-profile.component.scss'
})
export class ChangeProfileComponent {

  constructor(private router: Router, private header: HeaderMenuComponent){

  }

  navigateToMainpage(){
    this.router.navigateByUrl('browse')
  }


  changeUserValues(){
    const url = `http://35.232.116.50/users/${this.header.userID}/update/`;

    console.log(url)
  }
}
