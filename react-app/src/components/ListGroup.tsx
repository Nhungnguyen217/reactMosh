import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Paris", "Tokyo", "Ha Noi", "Da Nang"];
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // const [name, setNam] = useState('')
  // arr[0] : varriable; arr[1]: update function, update varriable

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
