import { ChangeEvent } from "react";

import { makeFieldRed } from "../../shared/lib/makeFieldRed";

const getNewMessage = (errorMessage: object, keyToDelete: string) => {
  const newMessage: any = {};

  for (const [key, value] of Object.entries(errorMessage)) {
    if (key !== keyToDelete) {
      newMessage[key] = value;
    }
  }

  return newMessage;
};

export const isValid = (
  element: EventTarget & HTMLInputElement,
  setErrorMessage: (obj: object) => void,
  errorMessage: object
) => {
  if (/[^A-Za-z0-9_-\s]/.test(element.value)) {
    makeFieldRed(element);

    setErrorMessage({
      ...errorMessage,
      [element.id]: "Incorrect input! Use only letters and numbers",
    });

    return false;
  }

  setErrorMessage({
    ...getNewMessage(errorMessage, element.id),
  });
  return true;
};

export const IsValidISBN = (
  element: EventTarget & HTMLInputElement,
  setErrorMessage: (obj: object) => void,
  errorMessage: object
) => {
  const isValid = element.value.length === 13 || element.value.length === 10;

  if (isValid) {
    setErrorMessage({
      ...getNewMessage(errorMessage, element.id),
    });
  } else {
    setErrorMessage({
      ...errorMessage,
      [element.id]: "ISBN should consist of 10 or 13 numbers",
    });
  }

  return isValid;
};

export const isEmpty = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setErrorMessage: (obj: object) => void,
  errorMessage: object
): boolean => {
  const element = e.target;

  if (!element.value.length) {
    makeFieldRed(element);
    setErrorMessage({
      ...errorMessage,
      [element.id]: "All the inputs should be filled",
    });

    return true;
  }

  element.classList.remove("empty");
  setErrorMessage({
    ...getNewMessage(errorMessage, element.id),
  });
  return false;
};
