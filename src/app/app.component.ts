import { Component } from '@angular/core';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonToolbar, IonHeader, IonTitle, IonButtons, IonButton } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  home,
  library,
  search
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
    IonTitle,
    IonButtons,
    IonButton
],
})
export class AppComponent {

  tabs = [
    {
      name: 'home',
      icon: 'home',
      title: 'Home'
    },
    {
      name: 'search',
      icon: 'search',
      title: 'Search'
    },
    {
      name: 'library',
      icon: 'library',
      title: 'Library'
    }
  ];

  constructor() {
    addIcons({
      home,
      search,
      library
    });
  }
}