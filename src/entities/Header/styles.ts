import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  font-size: x-large;
  color: black;
  font-weight: 700;

  &:hover {
    color: green;
  }
`;
