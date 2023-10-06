import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Output() selectedBook = new EventEmitter<Book>();

  handleBookSelected(book: Book) {
    this.selectedBook.emit(book);
  }

  myBooks: Book[] = [
    new Book(
      'Harry Potter',
      'JKR',
      'Fantasy',
      'https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=466&q=80'
    ),
    new Book(
      'Harry Potter',
      'JKR',
      'Fantasy',
      'https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=466&q=80'
    ),
    new Book(
      'Harry Potter',
      'JKR',
      'Fantasy',
      'https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=466&q=80'
    ),
  ];
}
