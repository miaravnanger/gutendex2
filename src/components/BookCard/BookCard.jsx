import styles from "./bookCard.module.css";
import BookDetails from "../../pages/BookDetails/BookDetailsModal";
export default function BookCard({ book }) {
  return (
    <>
      <div className={styles.bookCard}>
        <BookDetails book={book} />
        <img
          className={styles.bookImg}
          src={book.formats["image/jpeg"]}
          alt={book.title}
        />
        <p>By: {book.authors?.map((a) => a.name).join(", ")}</p>
      </div>
    </>
  );
}
