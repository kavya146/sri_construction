import "./App.css";
import About from "./about/About";
import Header from "./header/Header";
import HouseVideo from "./houseVideo/HouseVideo";
import MainCarousel from "./main_carousel/carousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainCarousel />
        <About />
        <HouseVideo />
      </header>
    </div>
  );
}

export default App;
