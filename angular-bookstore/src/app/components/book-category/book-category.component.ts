import { Component, OnInit } from '@angular/core';
import { BookCategory } from 'src/app/common/book-category';
import { BookService } from 'src/app/services/book.service';
import { log } from 'util';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  bookCategories: BookCategory[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  listBookCategories() {
    this.bookService.getBookCategories().subscribe(
      data =>
      console.log(`book categories${data}`)
      /* this.bookCategories = data */
    );
  }

}
