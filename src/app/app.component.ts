import { Component } from '@angular/core';
import { IonApp, IonButton, IonButtons, IonHeader, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonToolbar } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  add,
  albums,
  home,
  library,
  logoYoutube,
  notifications,
  play,
  search,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    IonTabBar,
    IonIcon,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonButton
],
})
export class AppComponent {
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