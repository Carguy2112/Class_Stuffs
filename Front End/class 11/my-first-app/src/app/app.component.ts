import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Joseph said your name goes in here';

  quote = '';

  boxes = [0, 0, 0, 0, 0];
}
