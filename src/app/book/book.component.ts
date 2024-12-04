import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book!: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBook().subscribe(data => {
      this.book = data;
    });
  }
}
