import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook } from "./book.actions";
import { Book } from "../models/book";

// reducers take current state, copy it, and return the new mutated state
// that way the state is not modified directly
// action + current state --> reducer --> new state
export const initialState: ReadonlyArray<Book> = [];
export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state: ReadonlyArray<Book>, { id, title, author }) => [...state, { id, title, author }]),
  on(RemoveBook, (state: ReadonlyArray<Book>, { bookId }) => state.filter(book => book.id !== bookId))
);
