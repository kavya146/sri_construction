import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ContactUs from "./contactUs/ContactUs";
import Main from "./Main/Main";
import Header from "./header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/about-us" element={<Main />} />
          <Route path="/our-work" element={<Main />} />
          <Route path="/services" element={<Main />} />
          <Route path="/choose-us" element={<Main />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
