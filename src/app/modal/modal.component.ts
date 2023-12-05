import { Component, ContentChild, TemplateRef, ViewChild, inject } from '@angular/core';
import { IxActiveModal, ModalService } from '@siemens/ix-angular';

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

  header ?: string;

  @ViewChild<IxActiveModal> modal !: IxActiveModal;
  


}
