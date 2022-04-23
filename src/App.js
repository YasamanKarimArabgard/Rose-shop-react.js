import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Layout from './LayOut/Layout';
import HomePage from './Pages/HomePage';
import Cart from './Pages/Cart/Cart';
import CartProvider from "./context/CartProvider";
import CheckoutPage from "./Pages/CheckoutPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from './Pages/LoginPage.jsx'
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
