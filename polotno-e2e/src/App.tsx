import { createDemoApp } from "polotno";
import Workspace from "polotno/canvas/workspace";
import Polotno from "./components/polotno/Polotno";
import "@blueprintjs/core/lib/css/blueprint.css";

const { store } = createDemoApp({
  container: document.getElementById("root"),
  key: "YOUR_API_KEY", // you can create it here: https://polotno.com/cabinet/
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
  sections: [],
});

function App() {
  return (
    <>
      <Workspace store={store} />
      <Polotno store={store} />
    </>
  );
}

export default App;
