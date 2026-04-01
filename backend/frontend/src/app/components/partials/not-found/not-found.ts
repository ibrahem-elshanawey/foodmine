import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: false,
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {
@Input()
visible=false;
@Input()
  notFoundMessage = "Nothing Found!";
  @Input()
  resetLinkText = "Reset";
  @Input()
  resetLinkRoute = "/";
  constructor() { }

}
