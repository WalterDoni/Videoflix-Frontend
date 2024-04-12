import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dataprotection',
  standalone: true,
  imports: [],
  templateUrl: './dataprotection.component.html',
  styleUrl: './dataprotection.component.scss'
})
export class DataprotectionComponent {

constructor(private router: Router){

}

goToLoginPage() {
  this.router.navigateByUrl('');
}

}
