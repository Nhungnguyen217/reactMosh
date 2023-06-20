import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}

      <Button
        // color="primary"
        children="Button"
        onClick={() => setAlertVisibility(true)}
      />
    </div>
  );
}
export default App;
