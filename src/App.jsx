import "./App.css";
import CoffeeC from "./components/CoffeeC/CoffeeC";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Quality from "./components/Quality/Quality";
import Shop from "./components/Shop/Shop";
import Sponsor from "./components/Sponsor/Sponsor";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Navbar />
          <Header />
        </div>
        <Sponsor />
        <Shop />
        <Features />
        <Quality />
        <CoffeeC />
      </div>
    </>
  );
}

export default App;
