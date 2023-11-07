import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { ProductCard } from "./components/ProductCard";
import { Product } from './components/Product';
import { Inform } from "./components/Inform";
import { Testimonial } from './components/Testimonial';
import { Popular } from "./components/Popular"
import { Footer } from './components/Footer';

function App() {
    return (
      <div className="App">
      <NavBar />
      <Banner />
      <Product />
      <Inform />
      <Testimonial />
      <Popular />
      <Footer />
    </div>
    );
  }


export default App;
