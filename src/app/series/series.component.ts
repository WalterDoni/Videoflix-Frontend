import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../fixed-menu-components/header-menu/header-menu.component';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [HeaderMenuComponent, FooterComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss',
})
export class SeriesComponent {
  videos: any[] = [];

  constructor() {
    this.getVideos()
  }

  async getVideos() {
    const url = 'https://videoflix-backend.walter-doni.at/video/';
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    this.videos = data.map((video: any) => ({
      title: video.title,
      description: video.description,
      category: video.category,
      file: 'https://videoflix-backend.walter-doni.at/video/' + video.video_file,
    }));


  }
}
