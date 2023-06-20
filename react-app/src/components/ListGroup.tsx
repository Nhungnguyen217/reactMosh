import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // const [name, setNam] = useState('')
  // arr[0] : varriable; arr[1]: update function, update varriable

  return (
    <>
      <h1>{heading}</h1>
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
              onSelectItem(item); // #18
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
