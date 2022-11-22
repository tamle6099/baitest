import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/Home";
import CreateNewWallet from "./page/CreateNewWallet/CreateNewWallet";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <CreateNewWallet />
    </div>
  );
}

export default App;
