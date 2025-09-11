import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { IKeyPadButton } from '../../interfaces/ikey-pad-button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-keypad-button',
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './keypad-button.html',
  styleUrl: './keypad-button.css'
})
export class KeypadButton {
  @Input() listButton!:IKeyPadButton[]
  @Output() onClick:EventEmitter<string> = new EventEmitter<string>();
  
  doAction(action:string){
    this.onClick.emit(action);
  }

}
