import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect } from "react";

import { Context } from "app";
import BookElem from "features/BookElem";
import { getAllBooks } from "shared/api/getAllBooks";

import { StyledTable } from "./styles";

const Dashboard: FC = observer(() => {
  const booksStore = useContext(Context)?.booksStore;

  useEffect(() => {
    getAllBooks()
      .then((data) => booksStore?.setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <title>Our books</title>

      <StyledTable className="table table-striped">
        <thead>
          <tr className="text-center">
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {booksStore?.books.map((book) => (
            <BookElem book={book} key={book.id} />
          ))}
        </tbody>
      </StyledTable>
    </>
  );
});
export default Dashboard;
