import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  currentCategoryId: string;

  constructor(private bookService: BookService, private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.paramMap.subscribe(() => {
      this.listBooks();
    });
  }

  listBooks() {

    const hasCategoryId = this.activetedRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = this.activetedRoute.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = '1';
    }

    this.bookService.getBooks(this.currentCategoryId).subscribe(
      data => this.books = data
    );
  }

}
