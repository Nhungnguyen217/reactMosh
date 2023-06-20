import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        // color="primary"
        children="Button"
        onClick={() => console.log("Ok")}
      />
    </div>
  );
}
export default App;
