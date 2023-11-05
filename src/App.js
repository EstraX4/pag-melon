import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { ProductCard } from "./components/ProductCard";
import { Product } from './components/Product';

function App() {
    return (
      <div className="App">
      <NavBar />
      <Banner />
      <Product />
    </div>
    );
  }


export default App;
