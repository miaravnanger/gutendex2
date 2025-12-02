import styles from "./bookCard.module.css";
import BookModal from "../../pages/BookDetails/BookDetailsModal";
export default function BookCard({ book }) {
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
      </div>
    </>
  );
}
