import { Component, ViewChild } from '@angular/core'; 
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-root',

  template: `
  <button (click)="open()">open</button>
  <div *ngIf="pressed"><span> YOU PRESSED THE BUTTON</span></div>
  <app-modal >
    <div>
        <p>test paragraph</p>
    </div>
  </app-modal>
  `,
})
export class AppComponent {

  @ViewChild(ModalComponent) modal !: ModalComponent;

  pressed =  false;
  async open(){
    this.pressed = !this.pressed;
    await this.modal.openModal({
      header: "test"
    })
  }
  
}
