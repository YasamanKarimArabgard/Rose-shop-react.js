import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CartProvider from "./context/CartProvider";
import AuthProvider from "./context/AuthProvider";
import ProductsProvider from "./context/ProductsProvider";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import route from './Routes/routes'
import { useState } from "react";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#647E68'
      },
      secondary: {
        main: '#84142D'
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
                {route.map(route => {
                  return <Route key={route.id} path={route.path} element={route.element} />
                })}
              </Routes>
            </ProductsProvider>
          </CartProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
