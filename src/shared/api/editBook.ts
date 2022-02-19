import axios from "axios";
import IBook from "../IBook";

export async function editBook(data: IBook) {
  try {
    const { id } = data;

    await axios.put(`http://localhost:3001/books/${id}`, data);
  } catch (error) {
    throw error as Error;
  }
}
