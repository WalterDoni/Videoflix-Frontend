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
