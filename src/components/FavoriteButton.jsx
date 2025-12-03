import { useFavorites } from "../context/FavoritesContext";

export default function FavoriteButton(props) {
  const { id } = props;
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((f) => f.id === id);

  return (
    <button
      classname="favorite-btn"
      onClick={() => toggleFavorite(props)}
      aria-label="toggle favorite"
    >
      {isFavorite ? "⭐ " : "☆"}
    </button>
  );
}
