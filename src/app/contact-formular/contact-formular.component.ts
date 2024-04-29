import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../fixed-menu-components/header-menu/header-menu.component';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';

@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [HeaderMenuComponent,FooterComponent],
  templateUrl: './contact-formular.component.html',
  styleUrl: './contact-formular.component.scss'
})
export class ContactFormularComponent {


  constructor(){

  }

  sendMail(){
  //Email senden
  }





}
