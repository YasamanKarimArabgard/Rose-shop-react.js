import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Layout from './LayOut/Layout';
import HomePage from './Pages/HomePage';
import Cart from './Pages/Cart/Cart';
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
