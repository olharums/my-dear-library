import axios from "axios";

interface IParams {
  title: string;
  author: string;
  isbn: number;
  category: string;
}

export async function addBook(data: IParams) {
  try {
    await axios.post("http://localhost:3001/books", data);
  } catch (error) {
    throw error as Error;
  }
}
