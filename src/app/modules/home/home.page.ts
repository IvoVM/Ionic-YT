import { Component } from '@angular/core';
import { IonContent, IonHeader, IonIcon, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoYoutube } from 'ionicons/icons';
import { ShortCardComponent } from "./components/short-card/short-card.component";
import { VideoCardComponent } from './components/video-card/video-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [IonContent, VideoCardComponent, ShortCardComponent, IonIcon, IonHeader, IonToolbar],
})
export class HomePage {
  shorts: any[] = [
   
  ];
  videos: any[] = [];

  constructor() {

    addIcons({
      logoYoutube,
    });
    this.videos = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      title: `Video ${index + 1}`,
      thumbnail: `https://picsum.photos/seed/video-${index + 1}/1280/720`,
      views: 1000,
    }));
    this.shorts = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      title: `Short ${index + 1}`,
      thumbnail: `https://picsum.photos/seed/short-${index + 1}/720/1280`,
    }));
  }


}
