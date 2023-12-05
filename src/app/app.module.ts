import { NgModule, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { IxMenu, IxModule } from '@siemens/ix-angular';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    BrowserModule,
    IxModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, ModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
