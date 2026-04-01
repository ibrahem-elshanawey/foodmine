import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  standalone: false,
  templateUrl: './text-input.html',
  styleUrl: './text-input.css'
})
export class TextInput {
@Input()
control!:AbstractControl;
@Input()
showErrorsWhen:boolean = true;
@Input()
label!: string;
@Input()
type: 'text' | 'password' | 'email' = 'text';

get formControl(){
  return this.control as FormControl;
}
}
