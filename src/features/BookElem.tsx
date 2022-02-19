import { FC } from "react";

import Buttons from "../entities/Buttons";
import IBook from "../shared/IBook";

interface IBookElem {
  book: IBook;
}

const BookElem: FC<IBookElem> = ({ book }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td className="text-center">{book.category}</td>
      <td className="text-center">{book.isbn}</td>
      <td className="text-center">
        <Buttons bookId={book.id} />
      </td>
    </tr>
  );
};
export default BookElem;
