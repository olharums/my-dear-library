import { FC, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { MdDangerous } from "react-icons/md";

import CheckModal from "entities/CheckModal";
import { Context } from "app";

import { deleteBook } from "../../shared/api/deleteBook";
import { getAllBooks } from "../../shared/api/getAllBooks";

import { ButtonContainer, StyledButton } from "./styles";

const Buttons: FC<{ bookId: number }> = ({ bookId }) => {
  const booksStore = useContext(Context)?.booksStore;

  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();

  const clickHandler = async (): Promise<void> => {
    await deleteBook(bookId);

    getAllBooks()
      .then((data) => booksStore?.setBooks(data))
      .catch((error) => console.error(error));
  };

  return (
    <ButtonContainer>
      <StyledButton
        variant="outline-warning"
        onClick={() => {
          navigate(`/edit/${bookId}`);
        }}
      >
        Edit
      </StyledButton>

      <StyledButton variant="outline-danger" onClick={() => setModalShow(true)}>
        Delete
      </StyledButton>

      <CheckModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        clickHandler={clickHandler}
      >
        <Container className="text-center">
          <MdDangerous size={"5rem"} style={{ fill: "red" }} />

          <h2>Delete the record?</h2>
        </Container>
      </CheckModal>
    </ButtonContainer>
  );
};
export default Buttons;
