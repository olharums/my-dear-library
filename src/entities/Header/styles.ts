import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  font-size: x-large;
  /* text-decoration: none; */
  color: black;
  font-weight: 700;

  &:hover {
    color: green;
    /* text-decoration: none; */
  }
`;
