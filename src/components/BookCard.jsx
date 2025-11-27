export default function BookCard(props) {
    const {title, image, } = props;

  return (
    <>
    <div className="bookCard">
        <h3>{title}</h3>
        <img src={image} alt={title}/>
    </div>
    </>
  );
}