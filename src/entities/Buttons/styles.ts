import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 426px) {
    justify-content: space-between;
  }
`;
