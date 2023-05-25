// In hoa chu dau cua ten function components
function Message() {
  const name = "Nhum";
  if (name)
    //JSX: Javascript XML
    return <h1>Hello {name}</h1>;
  return <h1>Hello world</h1>;
}
export default Message;
