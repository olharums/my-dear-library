import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { Context } from "app";
import Inputs from "features/Inputs";
import { editBook } from "shared/api/editBook";
import { markEmptyFiels } from "../shared/lib/markEmptyFields";
import { DASHBOARD_ROUTE } from "shared/paths";
import SuccessModal from "entities/SuccessModal";

import { Header, StyledContainer } from "./styles";

const EditBook = () => {
  const booksStore = useContext(Context)?.booksStore;

  const bookId = useParams().bookId || "";

  const defaultRecord = booksStore?.getBookById(bookId);
  const record = useContext(Context)?.record;
  if (defaultRecord) record?.setBook(defaultRecord);

  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState<boolean>(false);

  const editRecord = async () => {
    if (record?.isFilled()) {
      editBook(record.book).then(() => {
        setModalShow(true);

        setTimeout(() => {
          setModalShow(false);

          navigate(DASHBOARD_ROUTE);
        }, 1000);

        record.clearRecord();
      });
    } else {
      markEmptyFiels(record);
    }
  };

  return (
    <StyledContainer>
      <Header>Edit a book</Header>

      <form>
        <Inputs />

        <Button variant="outline-success" size="lg" onClick={editRecord}>
          Save
        </Button>
      </form>

      <SuccessModal modalShow={modalShow} />
    </StyledContainer>
  );
};
export default EditBook;
