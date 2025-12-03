import styles from "./bookCard.module.css";
import BookModal from "../../pages/BookDetails/BookDetailsModal";
import FavoriteButton from "../FavoriteButton";

export default function BookCard({ book }) {
  if (!book?.formats) return null;

  return (
    <>
      <div className={styles.bookCard}>
        <BookModal book={book} />
        <img
          className={styles.bookImg}
          src={book.formats["image/jpeg"]}
          alt={book.title}
          width={200}
        />
        <p>By: {book.authors?.map((a) => a.name).join(", ")}</p>
        <FavoriteButton {...book} />
      </div>
    </>
  );
}
