import { Component, ContentChild, TemplateRef, inject } from '@angular/core';
import { ModalService } from '@siemens/ix-angular';

interface ModalData {
  header ?: string,
  dismissButtonText ?: string,
  closeButtonText ?: string
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @ContentChild(TemplateRef) projectedTemplatedRef !: TemplateRef<unknown>

  modalService = inject(ModalService);

  async openModal(data : ModalData){
    const instance = await this.modalService.open({
      content: this.projectedTemplatedRef,
      data: data
    });

    instance.onClose.on(x => {
      console.log( x )
    });

    instance.onDismiss.on( x => {
      console.log(x)
    })
  }
  


}
