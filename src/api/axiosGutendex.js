import axios from "axios";

const fetchAllBooks = async () => {
  const res = await axios.get("https://gutendex.com/books/");
  return res.data;
};
const fetchBookDetails = async () => {
  // eslint-disable-next-line no-undef
  const res = await axios.get(`https://gutendex.com/books/${id}`);
  return res.data;
};
export { fetchAllBooks, fetchBookDetails };
