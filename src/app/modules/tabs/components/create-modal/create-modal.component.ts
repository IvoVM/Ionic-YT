import { Component, input, output } from '@angular/core';
import { IonModal } from "@ionic/angular";

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss'],
  imports: [IonModal],
})
export class CreateModalComponent  {
  initialBreakpoint = input<number>(0.5) ;
  breakpoints = input<number[]>([0,0.25, 0.5]);
  isModalOpen = input<boolean>(false);
  close = output<void>();
}
