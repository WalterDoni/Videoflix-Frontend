import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderMenuComponent } from '../fixed-menu-components/header-menu/header-menu.component';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [HeaderMenuComponent, FooterComponent, FormsModule, HttpClientModule],
  templateUrl: './contact-formular.component.html',
  styleUrls: ['./contact-formular.component.scss']
})
export class ContactFormularComponent {
  @ViewChild('messageSendFeedback') messageSendFeedback!: ElementRef;
  email: string = '';
  name: string = '';
  title: string = '';
  message: string = '';

  constructor(private http: HttpClient) { }

  async sendMail() {
    const mailData = {
      email: this.email,
      name: this.name,
      title: this.title,
      message: this.message
    };
    try {
      const response = await firstValueFrom(this.http.post('https://videoflix-backend.walter-doni.at/send-email/', mailData));
      console.log('Email erfolgreich gesendet', response);
      this.showUserFeedbackForMail();
      this.clearValues();
    } catch (error) {
      console.error('Fehler beim Senden der Email', error);
    }
  }

  clearValues() {
    this.email = "";
    this.name = "";
    this.title = "";
    this.message = "";
  }

  showUserFeedbackForMail(){
    const feedbackElement = this.messageSendFeedback.nativeElement;
    feedbackElement.classList.add('show');
    setTimeout(() => {
      feedbackElement.classList.remove('show');
    }, 2000);
  }


}
