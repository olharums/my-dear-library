import styled from "styled-components";

export const StyledTable = styled.table`
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    tr:nth-of-type(odd) {
      background: rgba(0, 0, 0, 0.3);
    }
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
      text-align: left !important;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    td:nth-of-type(1):before {
      content: "Title";
    }
    td:nth-of-type(2):before {
      content: "Author";
    }
    td:nth-of-type(3):before {
      content: "Category";
    }
    td:nth-of-type(4):before {
      content: "ISBN";
    }
    td:nth-of-type(5):before {
      content: "Actions";
    }
  }
`;
