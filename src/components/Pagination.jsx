export default function Pagination({ previous, next, onPageChange }) {
  return (
    <div className="pagination">
      <button disabled={!previous} onClick={() => onPageChange(previous)}>
        Previous
      </button>
      <button disabled={!next} onClick={() => onPageChange(next)}>
        Next
      </button>
    </div>
  );
}
