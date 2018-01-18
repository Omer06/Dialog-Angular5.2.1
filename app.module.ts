import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog/dialog.component';
import { DialogIIComponent } from './components/dialogll/dialog/dialog.component';

   @NgModule({
       bootstrap:    [AppComponent],
       declarations: [AppComponent, DialogComponent, DialogIIComponent],
       imports:      [BrowserModule, BrowserAnimationsModule, DialogsModule, FormsModule],
       providers: []
   })
   export class AppModule { }