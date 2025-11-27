import { useQuery } from "@tanstack/react-query";
import { fetchAllBooks, fetchBookDetails } from "../api/axiosGutendex";

const useAllBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchAllBooks,
  });
};

const useBookDetails = (id) => {
  return useQuery({
    queryKey: ["bookDetails", id],
    queryFn: () => fetchBookDetails(id),
    enabled: !!id,
  });
};

export { useAllBooks, useBookDetails };
