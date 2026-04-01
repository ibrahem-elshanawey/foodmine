import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: false,
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class Title {
@Input()
  title!: string;

  @Input()
  margin? = '1rem 0 1rem 0.2rem';

  @Input()
  fontSize? = '1.7rem';
}
