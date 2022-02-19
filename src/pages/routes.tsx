import {
  ADD_BOOK_ROUTE,
  DASHBOARD_ROUTE,
  EDIT_BOOK_ROUTE,
} from "../shared/paths";
import AddBook from "./AddBook";
import Dashboard from "./Dashboard";
import EditBook from "./EditBook";

const appRoutes = [
  {
    path: DASHBOARD_ROUTE,
    Component: Dashboard,
  },
  {
    path: `${ADD_BOOK_ROUTE}`,
    Component: AddBook,
  },
  {
    path: `${EDIT_BOOK_ROUTE}/:bookId`,
    Component: EditBook,
  },
];

export default appRoutes;
