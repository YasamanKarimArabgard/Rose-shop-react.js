import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Cart from './Pages/Cart/Cart';
import CartProvider from "./context/CartProvider";
import CheckoutPage from "./Pages/CheckoutPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from './Pages/LoginPage.jsx'
import AuthProvider, { useAuth } from "./context/AuthProvider";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ProductsPage from './Pages/ProductsPage.jsx'

function App() {


  const theme = createTheme({
    palette: {
      primary: {
        main: '#84a59d'
      },
      secondary: {
        main: '#db504e'
      },
      infoText: {
        main: '#ffe8d0'
      },
      lightPink: {
        main: '#f1cec8'
      }
    },
  });


  const auth = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/products' element={<ProductsPage />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
