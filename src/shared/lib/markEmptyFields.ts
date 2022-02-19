import RecordStore from "../../models/RecordStore";
import { makeFieldRed } from "./makeFieldRed";

export const markEmptyFiels = (record: RecordStore | undefined) => {
  const emptyFields = record?.getEmptyFiels() || [];

  for (const field of emptyFields) {
    makeFieldRed(document.getElementById(field));
  }
};
