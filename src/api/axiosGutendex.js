import axios from "axios";

const BASE_URL = "https://gutendex.com/books/";

const fetchBooksByCategory = async (category, page = 1) => {
  const res = await axios.get(`${BASE_URL}?topic=${encodeURIComponent(category)}&page=${page}`
);
if (!res.ok) {
  throw new Error("failed to fetch books");
}
return res.json();
}

const fetchBookDetails = async (id) => {

  const res = await axios.get(`https://gutendex.com/books/${id}`);
  if (!Response.ok) {
    throw new Error("Failed to fetch detailes about this book")
  }
  return res.data;
};
export { fetchBooksByCategory, fetchBookDetails };
