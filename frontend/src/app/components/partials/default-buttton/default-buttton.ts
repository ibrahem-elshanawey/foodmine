import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'default-buttton',
  standalone: false,
  templateUrl: './default-buttton.html',
  styleUrl: './default-buttton.css'
})
export class DefaultButtton {
@Input()
  type: 'submit' | 'button' = 'submit';
  @Input()
  text:string = 'Submit';
  @Input()
  bgColor = '#e72929';
  @Input()
  color = 'white';
  @Input()
  fontSizeRem = 1.3;
  @Input()
  widthRem = 12;
  @Output()
  onClick = new EventEmitter();
}
