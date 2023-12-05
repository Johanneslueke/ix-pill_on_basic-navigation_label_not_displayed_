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

  header ?: string;
  


}
