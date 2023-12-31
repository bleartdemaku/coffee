import "./App.css";
import CoffeeC from "./components/CoffeeC/CoffeeC";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Quality from "./components/Quality/Quality";
import Shop from "./components/Shop/Shop";
import Sponsor from "./components/Sponsor/Sponsor";
import Testimonials from "./components/Testimonials/Testimonials";

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
        <Menu />
        <Contact />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
