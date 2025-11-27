
import { useAllBooks } from "../hooks/useBookQuery";
import BookCard from "../components/BookCard";

export default function Books(){
  const { data, isLoading, isError, error } = useAllBooks();

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Could not load books, error: {error}</h3>;
  if (!data) return null;

  return (
    <>
      <div className="bookList">
        {data.results.map((book) => (
          <BookCard key={book.id}
          title={book.title}
          image={book.formats["image/jpeg"]} />
        ))}
      </div>
    </>
  );
}