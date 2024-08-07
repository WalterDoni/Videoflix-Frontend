import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderMenuComponent } from '../fixed-menu-components/header-menu/header-menu.component';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [HeaderMenuComponent, FooterComponent, CommonModule],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss'
})

export class DocumentationComponent {
  videos: any[] = [];

  @ViewChild('videoElement') videoElement!: ElementRef;
  isDetailViewVisible = false;
  selectedVideo: { file: string, title: string, description: string } = { file: '', title: '', description: '' };
  videoName = "";

  constructor() {
    this.getVideos();
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
      file: 'https://videoflix-backend.walter-doni.at' + video.video_file,
    }));
  }


  openVideoDetails(title: string, description: string, file: string) {
    this.selectedVideo = { title, description, file };
    const parsedUrl = new URL(file);
    const path = parsedUrl.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    this.videoName = fileName.split('.')[0];
    this.isDetailViewVisible = true;
  }

  ChangeVideoQuality(quality: string) {
    const newSrc = `https://videoflix-backend.walter-doni.at/media/videos/${this.videoName}_${quality}.mp4`;
    this.videoElement.nativeElement.src = newSrc;
    this.videoElement.nativeElement.load();
  }

  ChangeVideoQualityStandard() {
    const newSrc = `https://videoflix-backend.walter-doni.at/media/videos/${this.videoName}.mp4`;
    this.videoElement.nativeElement.src = newSrc;
    this.videoElement.nativeElement.load();
  }

  closeVideoDetails() {
    this.isDetailViewVisible = false;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

}

