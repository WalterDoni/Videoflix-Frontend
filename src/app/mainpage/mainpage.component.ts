import { Router } from '@angular/router';
import { Component} from '@angular/core';
import { HeaderMenuComponent } from '../fixed-menu-components/header-menu/header-menu.component';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeaderMenuComponent, FooterComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
})

export class MainpageComponent {
  videos: any[] = [];


  constructor(private router: Router) {
    this.getVideos();
  }

  navigateToUpload(){
    this.router.navigateByUrl('upload')
  }

  async getVideos() {
    const url = 'https://videoflix-backend.walter-doni.at/video/';
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('HTTP-Status:', response.status);
      if (!response.ok) {
        console.error('HTTP-Fehler:', response.status, response.statusText);
        return;
      }
      const data = await response.json();
      console.log('API-Daten:', data);
      this.videos = data.map((video: any) => ({
        title: video.title,
        description: video.description,
        category: video.category,
        file: 'https://videoflix-backend.walter-doni.at' + video.video_file,
      }));
    } catch (e) {
      console.error('Fehler beim Abrufen der Videos:', e);
    }
  }

}
