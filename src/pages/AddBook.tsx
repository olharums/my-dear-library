import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Context } from "app";
import Inputs from "../features/Inputs";
import { addBook } from "shared/api/addBook";
import { formData } from "../shared/lib/formData";
import { markEmptyFiels } from "shared/lib/markEmptyFields";
import { DASHBOARD_ROUTE } from "shared/paths";
import SuccessModal from "../entities/SuccessModal";

import { Header, StyledContainer } from "./styles";

const AddBook = () => {
  const record = useContext(Context)?.record;

  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState<boolean>(false);

  const addRecord = async () => {
    if (record?.isFilled()) {
      addBook(formData(record)).then(() => {
        record.clearRecord();

        setModalShow(true);

        setTimeout(() => {
          setModalShow(false);

          navigate(DASHBOARD_ROUTE);
        }, 1000);
      });
    } else {
      markEmptyFiels(record);
    }
  };

  return (
    <StyledContainer>
      <Header>Add a book</Header>

      <form>
        <Inputs />

        <Button variant="outline-success" size="lg" onClick={addRecord}>
          Add a book
        </Button>
      </form>

      <SuccessModal modalShow={modalShow} />
    </StyledContainer>
  );
};

export default AddBook;
