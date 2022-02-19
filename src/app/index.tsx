import { FC, createContext, useMemo } from "react";
import { HashRouter } from "react-router-dom";

import RecordStore from "../models/RecordStore";
import BooksStore from "../models/BooksStore";
import Header from "../entities/Header";
import AppRouter from "../pages";

import GlobalStyle from "./GlobalStyles";

interface IContext {
  record: RecordStore;
  booksStore: BooksStore;
}

export const Context = createContext<IContext | null>(null);

const App: FC = () => {
  const stores = useMemo(
    () => ({
      record: new RecordStore(),
      booksStore: new BooksStore(),
    }),
    []
  );

  return (
    <Context.Provider value={stores}>
      <HashRouter>
        <Header />

        <AppRouter />

        <GlobalStyle />
      </HashRouter>
    </Context.Provider>
  );
};

export default App;
