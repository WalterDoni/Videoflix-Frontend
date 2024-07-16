import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @ViewChild('updateContainer') updateContainer!: ElementRef;

  constructor(private router: Router){

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
}
