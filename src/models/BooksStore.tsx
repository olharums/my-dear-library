import { makeAutoObservable } from "mobx";
import IBook from "../shared/IBook";

export default class BooksStore {
  _books: IBook[] = [];
  _categories: Array<string> = ["Drama", "Comedy", "Fiction", "Poetry"];

  constructor() {
    makeAutoObservable(this);
  }

  setBooks(books: IBook[]): void {
    this._books = books;
  }

  get books(): IBook[] {
    return this._books;
  }

  get categories(): Array<string> {
    return this._categories;
  }

  getBookById(bookId: string): IBook {
    const defaultValue = {
      id: -1,
      title: "",
      author: "",
      isbn: 0,
      category: "",
    };

    if (bookId) {
      const checkedBookId = Number.parseInt(bookId);
      const book = this._books.find((book) => book.id === checkedBookId);
      return book ? book : defaultValue;
    }

    return defaultValue;
  }
}
