import axios from "axios";

export async function deleteBook(id: number) {
  try {
    await axios.delete(`http://localhost:3001/books/${id}`);
  } catch (error) {
    throw error as Error;
  }
}
