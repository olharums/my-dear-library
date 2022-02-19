import { makeAutoObservable } from "mobx";

import IBook from "../shared/IBook";

export default class RecordStore {
  _book: IBook = {
    id: -1,
    title: "",
    author: "",
    isbn: 0,
    category: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setBook(book: IBook): void {
    this._book = book;
  }

  get book(): IBook {
    return this._book;
  }

  setId(id: number): void {
    this._book.id = id;
  }

  get id(): number {
    return this._book.id;
  }

  setTitle(title: string): void {
    this._book.title = title;
  }

  get title(): string {
    return this._book.title;
  }

  setAuthor(author: string): void {
    this._book.author = author;
  }

  get author(): string {
    return this._book.author;
  }

  setISBN(isbn: number): void {
    this._book.isbn = isbn;
  }

  get isbn(): number {
    return this._book.isbn;
  }

  setCategory(category: string): void {
    this._book.category = category;
  }

  get category(): string {
    return this._book.category;
  }

  isFilled(): boolean {
    return Boolean(
      this._book.title &&
        this._book.author &&
        this._book.category &&
        this._book.isbn
    );
  }

  clearRecord(): void {
    this._book.title = "";
    this._book.author = "";
    this._book.category = "";
    this._book.isbn = 0;
    this._book.id = -1;
  }

  getEmptyFiels(): Array<string> {
    const emptyFields = [];
    !this._book.title && emptyFields.push("inputTitle");
    !this._book.author && emptyFields.push("inputAuthor");
    !this._book.category && emptyFields.push("inputCategory");
    !this._book.isbn && emptyFields.push("inputISBN");
    return emptyFields;
  }
}
