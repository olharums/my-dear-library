import { FC, useState } from "react";
import { Container } from "react-bootstrap";
import { CgDanger } from "react-icons/cg";
import { useLocation } from "react-router";

import { ADD_BOOK_ROUTE, DASHBOARD_ROUTE } from "../../shared/paths";
import CheckModal from "../CheckModal";

import { Link } from "./styles";

const Header: FC = () => {
  const isMainPage = useLocation().pathname === DASHBOARD_ROUTE;

  const [modalShow, setModalShow] = useState(false);

  return (
    <header className="m-2 p-2">
      <Container className="text-center">
        <nav>
          {isMainPage ? (
            <Link to={ADD_BOOK_ROUTE}>Add a book</Link>
          ) : (
            <Link to={"#"} onClick={() => setModalShow(true)}>
              Dashboard
            </Link>
          )}
        </nav>
      </Container>

      <CheckModal modalShow={modalShow} setModalShow={setModalShow}>
        <Container className="text-center">
          <CgDanger size={"5rem"} />

          <hgroup>
            <h2>Leave the page?</h2>
            <h3>All the changes will not be saved!</h3>
          </hgroup>
        </Container>
      </CheckModal>
    </header>
  );
};
export default Header;
