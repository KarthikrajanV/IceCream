import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Nav from "./components/Nav";
import Orders from "./components/Orders";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Services />
      <About />
      <Highlights/>
      <Orders />
      <Footer />
    </div>
  );
}

export default App;
