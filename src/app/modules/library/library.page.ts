import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class LibraryPage {}
