import axios from "axios";
import IBook from "../IBook";

export async function getAllBooks(): Promise<IBook[]> {
  try {
    const response = await axios.request<IBook[]>({
      method: "GET",
      url: "http://localhost:3001/books",
    });

    return response.data;
  } catch (error) {
    throw error as Error;
  }
}
