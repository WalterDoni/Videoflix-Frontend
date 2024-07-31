import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('uploadSuccess') uploadSuccess!: ElementRef;

  title!: string;
  category!: string;
  description!: string;
  file!: File;
  categories: string[] = ['Film', 'Serie', 'Dokumentation']
  constructor() { }

  onSelectionChange(event: any) {
    const selectedFile = event.target.value;
    if (selectedFile === "Film") {
      this.category = "movie";
    } else if (selectedFile === "Serie") {
      this.category = "series";
    } else {
      this.category = "documentation";
    }
  }

  onFileChange(event: any) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.file = fileInput.files[0];
    }}

    showUploadFeedback(){
      const feedbackElement = this.uploadSuccess.nativeElement;
      feedbackElement.classList.add('show');
      setTimeout(() => {
        feedbackElement.classList.remove('show');
      }, 2000);
    }

    async uploadNewMovie() {
      const url = `http://35.232.116.50/video/`;
      const currentDate = new Date().toISOString().split('T')[0];
      const feedback = document.querySelector('.upload') as HTMLElement | null;
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
          if (feedback) {
            feedback.style.display = "flex";
            setTimeout(() => {
              if (feedback) {
                feedback.style.display = 'none';
              }
            }, 3000);
          }
        }
      } catch (e) {
        console.log("Fehler beim Upload:", e);
      }
    }


}
