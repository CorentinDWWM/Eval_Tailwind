import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionC from "./components/SectionC";
import SectionL from "./components/SectionL";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex-grow">
        <SectionL />
        <SectionC />
      </div>
      <Footer />
    </div>
  );
}

export default App;
