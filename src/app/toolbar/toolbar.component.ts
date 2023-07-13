import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isActive: { [key: string]: boolean } = {};

  activeBox: string = '';

  setActive(box: string): void {
    this.activeBox = box;
  }
}
