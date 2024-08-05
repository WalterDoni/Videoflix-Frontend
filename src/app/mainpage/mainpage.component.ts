import { Router } from '@angular/router';
import { Component} from '@angular/core';
import { HeaderMenuComponent } from '../fixed-menu-components/header-menu/header-menu.component';
import { FooterComponent } from '../fixed-menu-components/footer/footer.component';
import { Url } from 'url';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeaderMenuComponent, FooterComponent, CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
})

export class MainpageComponent {

  isDetailViewVisible = false;
  selectedVideo: { file: string, title: string, description: string } = { file: '', title: '', description: '' };


  videos: any[] = [];


  constructor(private router: Router) {
    this.getVideos();
  }


  openVideoDetails(title: string, description: string, file: string) {
    this.selectedVideo = { title, description, file };
    this.isDetailViewVisible = true;
  }

  closeVideoDetails() {
    this.isDetailViewVisible = false;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  navigateToUpload(){
    this.router.navigateByUrl('upload')
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


}
