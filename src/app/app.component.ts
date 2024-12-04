import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookComponent, ReviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-book';
}
