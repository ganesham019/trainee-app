import "./App.css";
import Header from "./Component/Layouts/Header";
import ProductList from "./Component/ProductListData/ProductList";
import { Routes, Route } from "react-router-dom";
import Cart from "./Component/CartPage/Cart";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
