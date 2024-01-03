import { Provider } from "react-redux";
import "./App.css";
import AdditionIncreement from "./components/AdditionIncreement";
import ClickIncreement from "./components/ClickIncreement";
import NumScore from "./store/countStore";

function App() {
  return (
    <div className="App">
      hello
      <Provider store={NumScore}>
        <ClickIncreement />
        <AdditionIncreement/>
      </Provider>
    </div>
  );
}

export default App;
