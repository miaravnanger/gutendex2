import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCategoryBooks } from "../hooks/useBookQuery";
import BookCard from "../components/BookCard/BookCard";
import Pagination from "../components/Pagination";

export default function CategoryBooks() {
  const { category } = useParams();
  const normalizedCategory = category.toLowerCase();
  const [pageUrl, setPageUrl] = useState(null);

  const { data, isLoading, isError, error } = useCategoryBooks(
    normalizedCategory,
    pageUrl
  );
  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Could not load books, error: {error}</h3>;
  if (!normalizedCategory) return <h3>Please select category</h3>;

  return (
    <>
      <h2>{normalizedCategory.toUpperCase()}</h2>
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
