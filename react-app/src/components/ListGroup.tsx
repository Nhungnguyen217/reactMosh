function ListGroup() {
  let items = ["New York", "Paris", "Tokyo", "Ha Noi", "Da Nang"];
  items = [];
  const Message = () => {
    return items.length === 0 ? <p>No item</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {Message()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
