import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Book {
  title: string;
  year: number;
  author: string;
  pages: number;
  publisher: string;
  coverImage: string;
  authorImage: string;
  reviews: Review[];
}

export interface Review {
  reviewer: string;
  comment: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private book: Book = {
    title: 'Война и мир',
    year: 1869,
    author: 'Лев Толстой',
    pages: 1225,
    publisher: 'Эксмо',
    coverImage: 'https://example.com/cover.jpg',
    authorImage: 'https://example.com/author.jpg',
    reviews: [
      { reviewer: 'Иван', comment: 'Замечательная книга!' },
      { reviewer: 'Мария', comment: 'Читать всем!' }
    ]
  };

  getBook(): Observable<Book> {
    return of(this.book);
  }
}
