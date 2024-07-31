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
    const url = 'http://35.232.116.50/video/';
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    this.videos = data.map((video: any) => ({
      title: video.title,
      description: video.description,
      category: video.category,
      file: 'http://35.232.116.50' + video.video_file,
    }));
  }
}
