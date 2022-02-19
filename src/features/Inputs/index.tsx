import { FC, useContext, useState } from "react";

import { Context } from "app";
import { isValid, IsValidISBN, isEmpty } from "./validation";

import { ErrorText, Input, InputContainer } from "./styles";

const Inputs: FC = () => {
  const booksStore = useContext(Context)?.booksStore;
  const record = useContext(Context)?.record;

  const [title, setTitle] = useState<string>(record?.title || "");
  const [author, setAuthor] = useState<string>(record?.author || "");
  const [isbn, setIsbn] = useState<number>(record?.isbn || 0);
  const [category, setCategory] = useState<string>(record?.category || "");

  const [errorMessage, setErrorMessage] = useState<object>({});

  return (
    <>
      <InputContainer className="form-floating">
        <Input
          type="text"
          className="form-control"
          id="inputTitle"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            isValid(e.target, setErrorMessage, errorMessage) &&
            setTitle(e.target.value)
          }
          onBlur={(e) => {
            !isEmpty(e, setErrorMessage, errorMessage) &&
              record?.setTitle(title);
          }}
        />
        <label htmlFor="inputTitle">Title</label>
      </InputContainer>

      <InputContainer className="form-floating">
        <Input
          type="text"
          className="form-control"
          id="inputAuthor"
          placeholder="Author"
          value={author}
          onChange={(e) =>
            isValid(e.target, setErrorMessage, errorMessage) &&
            setAuthor(e.target.value)
          }
          onBlur={(e) =>
            !isEmpty(e, setErrorMessage, errorMessage) &&
            record?.setAuthor(author)
          }
        />
        <label htmlFor="inputAuthor">Author</label>
      </InputContainer>

      <InputContainer>
        <select
          id="inputCategory"
          className="form-select form-select-lg"
          aria-label="Choose a category"
          onChange={(e) => setCategory(e.target.value)}
          onBlur={(e) =>
            !isEmpty(e, setErrorMessage, errorMessage) &&
            record?.setCategory(category)
          }
        >
          {record?.id === -1 ? (
            <option selected value={""}>
              Choose a category
            </option>
          ) : (
            ""
          )}

          {booksStore?.categories.map((category) => (
            <option
              key={category}
              value={category}
              selected={category === record?.category}
            >
              {category}
            </option>
          ))}
        </select>
      </InputContainer>

      <InputContainer className="form-floating">
        <Input
          type="number"
          className="form-control"
          id="inputISBN"
          placeholder="ISBN"
          value={isbn ? isbn : ""}
          onChange={(e) => setIsbn(Number.parseInt(e.target.value))}
          onBlur={(e) =>
            !isEmpty(e, setErrorMessage, errorMessage) &&
            IsValidISBN(e.target, setErrorMessage, errorMessage) &&
            record?.setISBN(isbn)
          }
        />
        <label htmlFor="inputISBN">ISBN</label>
      </InputContainer>

      <ErrorText>{Object.values(errorMessage)[0]}</ErrorText>
    </>
  );
};
export default Inputs;
