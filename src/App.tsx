import "./App.css";
import BrowseOurCategory from "./components/BrowseOurCategory";
import Children from "./components/Children";
import Fiction from "./components/Fiction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nonfiction from "./components/Nonfiction";
import SelfImprovement from "./components/SelfImprovement";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowseOurCategory />

      <Nonfiction />

      <Fiction />

      <Children />

      <SelfImprovement />

      <Footer />
    </div>
  );
}

export default App;
