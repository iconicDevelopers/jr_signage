import "./App.css";
import About from "./Components/About";
import FactContents from "./Components/FactContents";
import Facts from "./Components/Facts";
import Footer from "./Components/Footer";
import HeaderCarousel from "./Components/HeaderCarousel";
import NavBar from "./Components/NavBar";
import Service from "./Components/Service";
import WaCaller from "./Components/Wa_Caller";

function App() {
  return (
    <>
      <NavBar />
      <HeaderCarousel />
      <About />
      <Service />
      <Facts />
      <FactContents />
      <Footer />
      <WaCaller />
      
    </>
  );
}

export default App;
