function ListGroup() {
  const items = [
    'New York',
    'Tokyo',
    'San Francisco',
    'London'
  ]
    return (
    <>
        <h1>List</h1>
        <ul className="list-group">
          {items.map(items=><li key={items}>{items}</li>)}
        </ul>
    </>
   
  );
}
export default ListGroup;
