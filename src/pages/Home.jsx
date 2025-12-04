import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import BookCard from "../components/BookCard/BookCard";
import { fetchRandomBooks } from "../api/axiosGutendex.js";

export default function Home() {
  const { searchResults } = useOutletContext();
  const [data, setData] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (searchResults.length > 0) {
      setBooks(searchResults);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchRandomBooks();
        setBooks(data.results || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchResults]);

  if (loading) return <p>Loading...</p>;
  if (!books.length) return <p>No books found</p>;

  return (
    <>
      {loading && <p>Loading...</p>}
      <div className="bookList">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      
    </>
  );
}
