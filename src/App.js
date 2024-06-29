import "./App.css";
import Header from "./header/Header";
import MainCarousel from "./main_carousel/carousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainCarousel />
      </header>
    </div>
  );
}

export default App;
