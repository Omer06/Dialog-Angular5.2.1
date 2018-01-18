import { Component, OnInit } from '@angular/core';
import { DialogInformation } from '../../../entities/DialogInformation';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() dialog = new DialogInformation();

  ngOnInit() {}

  yes() {
    this.dialog.yesProcess(this.dialog);
  }

  no() {
    this.dialog.noProcess(this.dialog);
  }

  ok() {
    this.dialog.okProcess(this.dialog);
  }

}
