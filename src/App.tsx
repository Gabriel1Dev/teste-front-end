import Categorias from "./components/Categorias";
import BlackFridayBanner from "./components/BlackFridayBanner";
import Header from "./components/Header";
import Products from "./components/Products";
import BannerParceiros from "./components/BannerParceiros";
import Brands from "./components/Brand";
function App() {
  return (
    <div className="App">
      <Header />
      <BlackFridayBanner />
      <Categorias />
      <Products />
      <BannerParceiros />
      <Brands />
    </div>
  );
}

export default App;
