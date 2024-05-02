import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {


  constructor(private router: Router){

  }

  goToLoginPage() {
    this.router.navigateByUrl('');
  }

}
