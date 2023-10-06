import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  @Output() currentPage = new EventEmitter<string>();
  collapsed: boolean = true;
  show: boolean = false;

  onSelectPage(page: string) {
    this.currentPage.emit(page);
  }
}
