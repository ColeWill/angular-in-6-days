import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  newBookTitle = "";
  newBookAuthor = "";
  allBooks: Book[] = [];

  ngOnInit():void {
    let savedBooks = localStorage.getItem('books');
    this.allBooks = savedBooks ? JSON.parse(savedBooks) : [];
    
  }

  addBook() {
    if(this.newBookTitle.trim().length && this.newBookAuthor.trim().length){
      let newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor
      }

      this.allBooks.push(newBook);

      localStorage.setItem('books', JSON.stringify(this.allBooks))
    }
  }

  deleteBook(index: number) {
    this.allBooks.splice(index, 1);

    localStorage.setItem('books', JSON.stringify(this.allBooks));
  }
}
