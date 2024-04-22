import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
})

export class MainpageComponent {
  videos: any[] = [];
  @ViewChild('videoplayer') videoplayer!: ElementRef;
  @ViewChild('video') video!: ElementRef;
  @ViewChild('playButton') playButton!: ElementRef;
  @ViewChild('volume') volume!: ElementRef;

  constructor() {
    this.getVideos();
  }

  startOrStopMovie() {
    const videoElement = this.video.nativeElement as HTMLVideoElement;
    if (videoElement.paused) {
      videoElement.play();
      this.playButton.nativeElement.textContent = "Pause";
    } else {
      videoElement.pause();
      this.playButton.nativeElement.textContent = "Play";
    }
  }

  changeVolume() {
    const videoElement = this.video.nativeElement as HTMLVideoElement;
    videoElement.volume = parseFloat(this.volume.nativeElement.value);
  }

  async getVideos() {
    const url = 'http://127.0.0.1:8000/video/';
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
        file: 'http://127.0.0.1:8000' + video.video_file,
      }));
      console.log(this.videos);
    } catch (e) {
      console.log(e);
    }
  }
}
