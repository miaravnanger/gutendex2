import { useState, useEffect } from "react";
import "../styles/global.css";

export default function Searchbar({ onSelectBooks }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      onSelectBooks && onSelectBooks([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setLoading(true);
      try {
        const { searchBooks } = await import("../api/axiosGutendex.js");
        const data = await searchBooks(query);
        if (onSelectBooks) onSelectBooks(data.results || []);
      } catch (error) {
        console.error(error);
        if (onSelectBooks) onSelectBooks([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query, onSelectBooks]);

  return (
    <div className="search-bar-container">
      <input
        className="searchInput"
        type="text"
        placeholder="search for your favorite books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
    </div>
  );
}
