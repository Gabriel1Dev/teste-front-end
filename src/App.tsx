import Categorias from "./components/Categorias";
import BlackFridayBanner from "./components/BlackFridayBanner";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <BlackFridayBanner />
      <Categorias />
    </div>
  );
}

export default App;
