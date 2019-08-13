import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
