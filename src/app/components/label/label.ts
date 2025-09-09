import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-label',
  imports: [CommonModule],
  templateUrl: './label.html',
  styleUrl: './label.css'
})
export class Label {
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() appearance!: string;
  @Input() required!: boolean;
}
