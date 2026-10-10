import Categorias from "./components/Categorias";
import BlackFridayBanner from "./components/BlackFridayBanner";
import Header from "./components/Header";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <Header />
      <BlackFridayBanner />
      <Categorias />
      <Products />
    </div>
  );
}

export default App;
