import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

  videos: any[] = []; // Renamed to `videos` for clarity

  constructor() {  this.getVideos()}

  async getVideos() {
    const url = "http://127.0.0.1:8000/video/";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();
      this.videos = data.map((video: any) => ({
        title: video.title,
        description: video.description,
        category: video.category,
        file: "http://127.0.0.1:8000" + video.video_file
      }));
      console.log(this.videos);
    }
    catch (e) {
      console.log(e);
    }
  }
}





