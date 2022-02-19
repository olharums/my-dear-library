import { FC, ReactChild, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { DASHBOARD_ROUTE } from "../shared/paths";
import { Context } from "../app";

interface IProps {
  modalShow: boolean;
  setModalShow: (show: boolean) => void;
  children: ReactChild;
  clickHandler?: () => void;
}

const CheckModal: FC<IProps> = ({
  modalShow,
  setModalShow,
  children,
  clickHandler,
}) => {
  const navigate = useNavigate();

  const record = useContext(Context)?.record;

  return (
    <Modal
      show={modalShow}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer className="ds-flex flex-row justify-content-evenly">
        <Button
          variant="danger"
          onClick={() => {
            clickHandler && clickHandler();
            setModalShow(false);
            record?.clearRecord();
            navigate(DASHBOARD_ROUTE);
          }}
        >
          Ok
        </Button>
        <Button variant="secondary" onClick={() => setModalShow(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CheckModal;
