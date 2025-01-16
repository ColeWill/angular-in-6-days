import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook, AddBookSuccess, AddBookFailure } from "./book.actions";
import { Book } from "../models/book";

// reducers take current state, copy it, and return the new mutated state
// that way the state is not modified directly
// action + current state --> reducer --> new state
export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  // initial actions starts the process and only returns the sate
  on(AddBook, (state) => { return state}),
  // This action tries to submit the book, so it mutates the original array by adding the book
  on(AddBookSuccess, (state: ReadonlyArray<Book>, { id, title, author }) => [...state, { id, title, author }]),
  on(AddBookFailure, (state, {error}) => {
    console.error(error)
    return state;
  }),
  on(RemoveBook, (state: ReadonlyArray<Book>, { bookId }) => state.filter(book => book.id !== bookId))
);
