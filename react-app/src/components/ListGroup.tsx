function ListGroup() {
  let items = ["New York", "Paris", "Tokyo", "Ha Noi", "Da Nang"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {/* true -> <p> No item </p> */}
      {items.length === 0 && <p>No item</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
