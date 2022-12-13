import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {
  title: string = 'Mostrar mensaje';
  visibility: boolean = false;

  showMessage() {
    this.visibility = !this.visibility;
    this.title = this.visibility ? 'Ocultar mensaje' : 'Mostrar mensaje';
  }

}
