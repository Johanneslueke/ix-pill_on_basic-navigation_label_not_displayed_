import { Component, ViewChild } from '@angular/core'; 
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-root',

  template: `
  <button (click)="open()">open</button>

  <app-modal >
    <div>
        <p>test paragraph</p>
    </div>
  </app-modal>
  `,
})
export class AppComponent {

  @ViewChild(ModalComponent) modal !: ModalComponent;

  open(){
    this.modal.openModal({
      header: "test"
    })
  }
  
}
