import styles from "./modal.module.css"

export default function BookModal({isOpen, onClose, categories, onSelect}) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Select category</h2>
        <ul className="categoryList">
          {categories.map((cat, i)=> (
            <li key={i} onClick={()=> {
              onSelect(cat); onClose();
            }}>{cat.toUpperCase()}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
      </div>
  );
}