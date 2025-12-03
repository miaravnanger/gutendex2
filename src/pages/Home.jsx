import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import BookCard from "../components/BookCard/BookCard";
import { searchBooks, fetchRandomBooks } from "../api/axiosGutenbergApi";

export default function Home(){
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true)

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";


useEffect(() => {
  setLoading(true);

  const fetchData = async () => {
    try {
      let data;
      if (searchQuery) {
        data = await searchBooks(searchQuery);
      } else {
        data = await fetchRandomBooks();
      }
      setBooks(data.results || []);
    } catch (error) {
      console.error(error);
      setBooks([])
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [searchQuery]);


  if (loading) return <p>Loading...</p>;
  if (!books.length) return <p>No books found</p>;

  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
