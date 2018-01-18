import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DialogInformation, DialogState } from './entities/DialogInformation';
import { Promise } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dialog = new DialogInformation();

  ngOnInit() { }

  openDialog(): void {
    this.dialog = new DialogInformation('Dialog Başlık', 'Bu dialog hakkındaki kararınız nedir ?', DialogState.Dialog);

    this.dialog.yesProcess = function(dialog: DialogInformation) {
      alert('Bu fonksiyon çalışıyorsa eveti seçtiniz');
      dialog.close();
    };

    this.dialog.noProcess = function(dialog: DialogInformation) {
      alert('Bu fonsiyon çalışıyorsa hayırı seçtiniz');
      dialog.close();
    };

    this.dialog.show();
  }

  openWindow(): void {
    this.dialog = new DialogInformation('Window Başlık', 'Bu window hakkındaki kararınız nedir ?', DialogState.Window);
    this.dialog.show();
  }

  openInput() {
    this.dialog = new DialogInformation('Lütfen yaşınızı giriniz ?', null , DialogState.Input);
    this.dialog.okProcess = function(dialog: DialogInformation) {
      alert('Yaşınız : ' + dialog.input);
    };
    this.dialog.show();
  }
}
