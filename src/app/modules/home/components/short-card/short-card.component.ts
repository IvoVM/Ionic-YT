import { Component, input } from '@angular/core';
import { IonCard, IonIcon, IonButton } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { ellipsisVertical } from 'ionicons/icons';

@Component({
  selector: 'app-short-card',
  templateUrl: './short-card.component.html',
  styleUrls: ['./short-card.component.scss'],
  imports: [IonCard, IonIcon, IonButton],
})
export class ShortCardComponent  {
 short = input.required<any>();

 constructor(){
  addIcons({ellipsisVertical

  })
 }
 

}
