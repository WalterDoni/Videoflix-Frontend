import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../fixed-menu-components/header-menu/header-menu.component';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderMenuComponent, FooterComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  videos: any[] = [];

  constructor() {
    this.getVideos()
  }

  async getVideos() {
    const url = 'http://35.232.116.50/video/';
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      this.videos = data.map((video: any) => ({
        title: video.title,
        description: video.description,
        category: video.category,
        file: 'http://35.232.116.50' + video.video_file,
      }));
    } catch (e) {
      console.log(e);
    }
  }
}
