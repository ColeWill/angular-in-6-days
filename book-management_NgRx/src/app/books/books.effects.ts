import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as bookActions from './book.actions';
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {
  // This is an NgRx effect that responds to the addBook actions.
  addBook = createEffect(() => this.actions$.pipe(
    // Listen for actions of type 'AddBook'.
    ofType(bookActions.AddBook),
    // For each 'Addbook' Action call addbook on the addbook service.
    // 'mergeMap' allows for multiple calls at the same time
    mergeMap((action) => this.bookService.addBook(action)
    .pipe(
      // if the addbook action is successful dispatch 'AddBookSuccess' with the book data.
      map(book => bookActions.AddBookSuccess(book)))),
      //If the addbook fails disptach an error.
      catchError((error)=> of(bookActions.AddBookFailure({error})))
  ))
  constructor(
    private actions$: Actions, 
    private bookService: BookService
  ) {}


}