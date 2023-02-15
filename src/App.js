import "./App.css";
import { Products } from "./components/Products";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      Thanh Binh <AddProduct /> 
      <Products />
    </div>
  );
}

export default App;
