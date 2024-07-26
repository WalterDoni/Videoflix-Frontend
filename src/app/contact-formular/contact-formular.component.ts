import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderMenuComponent } from '../fixed-menu-components/header-menu/header-menu.component';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [HeaderMenuComponent, FooterComponent, FormsModule, HttpClientModule ],
  templateUrl: './contact-formular.component.html',
  styleUrls: ['./contact-formular.component.scss']
})
export class ContactFormularComponent {
  email: string = '';
  name: string = '';
  title: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  sendMail() {
    const mailData = {
      email: this.email,
      name: this.name,
      title: this.title,
      message: this.message
    };

    this.http.post('http://35.232.116.50/send-email/', mailData)
      .subscribe(response => {
        console.log('Email sent successfully', response);
        // Optionally show a success message to the user
      }, error => {
        console.error('Error sending email', error);
        // Optionally show an error message to the user
      });
  }
}
