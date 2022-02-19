import styled from "styled-components";

export const InputContainer = styled.div`
  width: 85%;
  margin: 1rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  & .form-select.empty {
    background-color: rgba(220, 3, 3, 0.44);
  }

  @media (max-width: 426px) {
    width: 95%;
  }
`;

export const Input = styled.input`
  font-size: x-large;
  padding-top: 2rem !important;
  padding-bottom: 0.5rem !important;

  &.empty {
    border: 2px solid red;

    &:focus {
      border: none;
    }
  }
`;

export const ErrorText = styled.p`
  color: red;
`;
