import RecordStore from "models/RecordStore";

export const formData = (record: RecordStore) => {
  return {
    title: record.title,
    author: record.author,
    isbn: record.isbn,
    category: record.category,
  };
};
