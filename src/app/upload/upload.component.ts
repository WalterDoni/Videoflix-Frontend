import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../fixed-menu-components/header-menu/header-menu.component';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [HeaderMenuComponent, FooterComponent, FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {

  title!: string;
  category!: string;
  description!: string;
  file!: File;

  constructor() { }

  onFileChange(event: any) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.file = fileInput.files[0];
      console.log('Selected file:', this.file);
    }
  }

  async uploadNewMovie() {
    debugger
    const url = `http://127.0.0.1:8000/video/`;
    const currentDate = new Date().toISOString().split('T')[0];

    const formData = new FormData();
    formData.append('created_at', currentDate);
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('category', this.category);
    formData.append('video_file', this.file);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok || response.status === 200) {
        console.log("Upload erfolgreich");
      }
    } catch (e) {
      console.log("Fehler beim Upload:", e);
    }
  }

}
