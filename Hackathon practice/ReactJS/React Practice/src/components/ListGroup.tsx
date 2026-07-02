// import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const handleClick = (event : MouseEvent)=> console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>no items found</p> : null} */}
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(items)
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
