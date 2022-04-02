import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Layout from './LayOut/Layout';
import HomePage from './Pages/HomePage';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="App col-12 d-flex flex-column align-items-center">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
