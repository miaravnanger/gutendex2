import styles from "./bookCard.module.css";
import BookModal from "../../pages/BookDetailsModal";
import FavoriteButton from "../FavoriteButton";
import { useState } from "react";

export default function BookCard({ book }) {
  if (!book?.formats) return null;
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles.bookCard}>
        <BookModal book={book} open={open} handleClose={handleClose} />
        <h2
          style={{ cursor: "pointer", fontWeight: "bold", margin: "5px 0" }}
          onClick={handleOpen}>{book.title}
        </h2>
        <img
          className={styles.bookImg}
          src={book.formats["image/jpeg"]}
          alt={book.title}
          width={220}
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        />
        <p>By: {book.authors?.map((a) => a.name).join(", ")}</p>
        <FavoriteButton {...book} />
      </div>
    </>
  );
}
