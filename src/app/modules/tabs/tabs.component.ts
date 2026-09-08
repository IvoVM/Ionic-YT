import { Component, signal } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { add, albums, home, library, logoYoutube, notifications, play, search } from 'ionicons/icons';
import { CreateModalComponent } from "./components/create-modal/create-modal.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonLabel, IonIcon, IonTabButton, IonTabs, IonTabBar, CreateModalComponent],
})
export class TabsComponent  {
  isModalOpen = signal(false);
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

  openModal(): void{
    this.isModalOpen.set(true);
  }

}
