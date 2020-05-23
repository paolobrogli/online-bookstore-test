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
  currentCategoryId: number;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.listBooks();
    });
  }

  listBooks() {

<<<<<<< HEAD
    const hasCategoryId = this.activatedRoute.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId = +this.activatedRoute.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }
=======
    const hasCategoryId = this.activetedRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = this.activetedRoute.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = '1';
    }

>>>>>>> 2ff7a0158d618ca0b03a3f43eecc264d59ffe83c
    this.bookService.getBooks(this.currentCategoryId).subscribe(
      data => this.books = data
    );
  }

}
