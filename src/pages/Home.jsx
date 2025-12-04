import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import BookCard from "../components/BookCard/BookCard";
import { fetchRandomBooks, searchBooks } from "../api/axiosGutendex.js";

export default function Home() {
  const { searchData } = useOutletContext();
  const [pageUrl, setPageUrl] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPageUrl(null); //reset pagination when starting a new search
  }, [searchData]);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      try {
        let response;

        if (searchData && searchData.results) {
          //pagination in search
          response = pageUrl ? await searchBooks(null, pageUrl) : searchData;
        } else {
          //random books
          response = await fetchRandomBooks(pageUrl);
        }

        setData(response);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [searchData, pageUrl]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No books found</p>;

  return (
    <>
      <div className="bookList">
        {data.results.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Pagination
        previous={data.previous}
        next={data.next}
        onPageChange={setPageUrl}
      />
    </>
  );
}
