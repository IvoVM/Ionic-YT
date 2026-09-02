import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class SearchPage {}
