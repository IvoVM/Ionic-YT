import { Component, input } from '@angular/core';
import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { ellipsisVertical } from 'ionicons/icons';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  imports: [IonCardContent, IonAvatar, IonCardHeader, IonCardTitle, IonCard, IonIcon],
})
export class VideoCardComponent {
  video = input.required<any>();


  constructor() {
    addIcons({
      ellipsisVertical
    })
  }
}
