import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {


  constructor(private router: Router){

  }


  navigateToStartscreen(){
    this.router.navigateByUrl('');
  }

  navigateToProfile(){
    this.router.navigateByUrl('profile');
  }
}
