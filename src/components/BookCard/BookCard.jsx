import styles from "./bookCard.module.css"
export default function BookCard({ book }) {
  return (
    <>
      <div className={styles.bookCard}>
        <h3>{book.title}</h3>
        <img className={styles.bookImg}src={book.formats["image/jpeg"]} alt={book.title} />
        <p>By: {book.authors?.map((a) => a.name).join(", ")}</p>
      </div>
    </>
  );
}
