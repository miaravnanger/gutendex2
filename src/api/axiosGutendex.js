import axios from "axios";

const BASE_URL = "https://gutendex.com/books/";

const categoryMap = {
  fiction: "Fiction",
  mystery: "Mystery",
  thriller: "Thriller",
  romance: "Romance",
  fantasy: "Fantasy",
  morality: "Morality",
  society: "Society",
  power: "Power",
  justice: "Justice",
  adventure: "Adventure",
  tragedy: "Tragedy",
  war: "War",
  philosophy: "Philosophy",
};

const fetchAllBooks = async (url = BASE_URL) => {
  const res = await axios.get(url);
  return res.data;
}

const fetchBooksByCategory = async (category, pageUrl) => {
if (!category) return null;
const topic= categoryMap[category];
const url = pageUrl || `${BASE_URL}?topic=${encodeURIComponent(topic)}`;
const res = await axios.get(url);
return res.data;
}

const searchBooks = async (query, pageUrl) => {
  const url = pageUrl || `${BASE_URL}?search=${encodeURIComponent(query)}`
  const res = await axios.get(url);
  return res.data
}

const fetchBookDetails = async (id) => {

  const res = await axios.get(`https://gutendex.com/books/${id}`);
  if (!Response.ok) {
    throw new Error("Failed to fetch detailes about this book")
  }
  return res.data;
};
export {categoryMap, fetchAllBooks, fetchBooksByCategory, searchBooks, fetchBookDetails };
