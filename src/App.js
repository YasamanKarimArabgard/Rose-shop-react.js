import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Cart from './Pages/Cart/Cart';
import CartProvider from "./context/CartProvider";
import AuthProvider, { useAuth } from "./context/AuthProvider";
import ProductsProvider from "./context/ProductsProvider";
import CheckoutPage from "./Pages/CheckoutPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from './Pages/LoginPage.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ProductsPage from './Pages/ProductsPage.jsx'
import NotFound from "./Pages/NotFoundPage";
import ProfilePage from "./Pages/ProfilePage";
import ProductPage from "./Pages/ProductPage";
import AboutUsPage from "./Pages/AboutUsPage";

function App() {


  const theme = createTheme({
    palette: {
      primary: {
        main: '#84a59d'
      },
      secondary: {
        main: '#db504e'
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <CartProvider>
            <ProductsProvider>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/dresses' element={<ProductsPage />} />
                <Route path='/dresses/:id' element={<ProductPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/about-us' element={<AboutUsPage />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </ProductsProvider>
          </CartProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
