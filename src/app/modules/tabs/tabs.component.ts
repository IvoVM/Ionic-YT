import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { add, albums, home, library, logoYoutube, notifications, play, search } from 'ionicons/icons';
import { IonLabel, IonIcon, IonTabButton, IonTabs, IonTabBar } from "@ionic/angular";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonLabel, IonIcon, IonTabButton, IonTabs, IonTabBar],
})
export class TabsComponent  {

  constructor() {
    addIcons({
      home,
      play,
      albums,
      search,
      library,
      notifications,
      logoYoutube,
      add
    });
  }

}
