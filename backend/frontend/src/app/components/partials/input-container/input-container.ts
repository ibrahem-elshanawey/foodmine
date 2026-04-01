import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-container',
  standalone: false,
  templateUrl: './input-container.html',
  styleUrl: './input-container.css'
})
export class InputContainer {
@Input()
label!:string;
@Input()
bgColor='white';
}
