import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';

@Component({
  selector: 'app-dataprotection',
  standalone: true,
  imports: [FooterComponent],
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
