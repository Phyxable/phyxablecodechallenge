import { useEffect } from "react";
import { useState } from "react";
import { config } from "../config";

const useGetBooks = (userId: String) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`${config.apiUrl}/books`);

      const data = await response.json();
      setBooks(data.books);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return { books, loading, error };
};

export default useGetBooks;
