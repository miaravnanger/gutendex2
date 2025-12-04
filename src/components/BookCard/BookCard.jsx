import styles from "./bookCard.module.css";
import BookModal from "../../pages/BookDetailsModal";
import FavoriteButton from "../FavoriteButton";
import { useNavigate } from "react-router-dom";

export default function BookCard({ book }) {
  const navigate = useNavigate();
  const openModal = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <>
      <div className={styles.bookCard}>
        <h2
          style={{ cursor: "pointer", fontWeight: "bold", margin: "5px 0" }}
          onClick={openModal}
        >
          {book.title}
        </h2>
        <img
          className={styles.bookImg}
          src={book.formats["image/jpeg"]}
          alt={book.title}
          width={220}
          style={{ cursor: "pointer" }}
          onClick={openModal}
        />
        <p>By: {book.authors?.map((a) => a.name).join(", ")}</p>
        <FavoriteButton {...book} />
      </div>
    </>
  );
}
