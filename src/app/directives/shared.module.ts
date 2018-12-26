import { AlertComponent } from './alert/alert.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [AlertComponent],
  exports: [AlertComponent]
})
export class SharedModule {}
