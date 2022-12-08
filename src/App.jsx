import "./App.css";
import BgAnimation from "./components/BgAnimation";
import BottomGrid from "./components/BottomGrid";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen overflow-hidden relative max-h-screen">
      <BgAnimation />
      <Navbar />
      <BottomGrid />
      <Hero />
    </div>
  );
}

export default App;
