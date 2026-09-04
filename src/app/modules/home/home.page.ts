import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { VideoCardComponent } from './components/video-card/video-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [IonContent, VideoCardComponent],
})
export class HomePage {
  videos = [
    {
      id: 1,
      title: 'Video 1',
      thumbnail: 'https://youtu.be/ls4yclwi9H4?si=ka4gR68sTp0arymp',
      views: 1000,
    },{
      id: 2,
      title: 'Video 2',
      thumbnail: 'https://youtu.be/ls4yclwi9H4?si=ka4gR68sTp0arymp',
      views: 1000,
    },{
      id: 3,
      title: 'Video 3',
      thumbnail: 'https://youtu.be/ls4yclwi9H4?si=ka4gR68sTp0arymp',
      views: 1000,
    },{
      id: 4,
      title: 'Video 4',
      thumbnail: 'https://youtu.be/ls4yclwi9H4?si=ka4gR68sTp0arymp',
      views: 1000,
    },{
      id: 5,
      title: 'Video 5',
      thumbnail: 'https://youtu.be/ls4yclwi9H4?si=ka4gR68sTp0arymp',
      views: 1000,
    },{
      id: 6,
      title: 'Video 6',
      thumbnail: 'https://youtu.be/ls4yclwi9H4?si=ka4gR68sTp0arymp',
      views: 1000,
    },{
      id: 7,
      title: 'Video 7',
      thumbnail: 'https://youtu.be/ls4yclwi9H4?si=ka4gR68sTp0arymp',
      views: 1000,
    },{
      id: 8,
      title: 'Video 8',
      thumbnail: 'https://youtu.be/ls4yclwi9H4?si=ka4gR68sTp0arymp',
    }
  ];

  constructor() {
    this.videos = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      title: `Video ${index + 1}`,
      thumbnail: `https://youtu.be/ls4yclwi9H4?si=ka4gR68sTp0arymp`,
      views: 1000,
    }));
  }
}
