import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import TopBar from "./Components/TopBar";
import Home from "./Components/Home";
function App() {
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <TopBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
