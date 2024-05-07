import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../fixed-menu-components/header-menu/header-menu.component';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [HeaderMenuComponent, FooterComponent],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  uploadedImg: any = {};

  constructor() { }




  uploadVideo(event: any) {
    this.uploadedImg = event.target.files[0];

  }
}
