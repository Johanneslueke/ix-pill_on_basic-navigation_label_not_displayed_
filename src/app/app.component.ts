import { Component, ViewChild, inject } from '@angular/core'; 
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '@siemens/ix-angular';
@Component({
  selector: 'app-root',

  template: `
  <button (click)="open()">open</button>
  <div *ngIf="pressed"><span> YOU PRESSED THE BUTTON</span></div>
 
  `,
})
export class AppComponent {

  @ViewChild(ModalComponent) modal !: ModalComponent;
  modalservice = inject(ModalService);

  pressed =  false;
  async open(){
    this.pressed = !this.pressed;
    await this.modalservice.open({
      content: ModalComponent,
      data: {
        header: "TEST HEADER"
      }
    })
  }
  
}
