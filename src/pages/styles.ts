import { Container } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  width: 60%;
  border-radius: 30px;
  background-color: white;
  padding: 2rem;
  text-align: center;

  @media (max-width: 769px) {
    width: 80%;
  }

  @media (max-width: 426px) {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.header`
  font-size: xx-large;
`;
