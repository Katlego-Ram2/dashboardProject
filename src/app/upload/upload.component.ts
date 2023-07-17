import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  uploadFile() {
    const file = this.fileInput.nativeElement.files[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  }
}
