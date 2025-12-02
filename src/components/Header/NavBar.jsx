import { useNavigate, Link } from "react-router-dom";
import "../../styles/global.css";
import { useState } from "react";
import BookModal from "../Category/CategoryModal";

const categories = [
  "fiction",
  "mystery",
  "thriller",
  "romance",
  "fantasy",
  "morality",
  "society",
  "power",
  "justice",
  "adventure",
  "tragedy",
  "war",
  "philosophy",
];

export default function NavBar() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCategorySelect = (category) => {
    navigate(`/gutendex2/category/${category}`);
    setIsModalOpen(false);
  };
  return (
    <nav className="navBar">
      <button onClick={() => setIsModalOpen(true)}>Categories</button>
      <Link to="favorites">Favorites</Link>
      <Link to="/gutendex2/">Home</Link>
      <BookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categories={categories}
        onSelect={handleCategorySelect}
      />
    </nav>
  );
}
