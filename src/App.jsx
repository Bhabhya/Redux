import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Product from './Components/Product';
import Info from './Components/Info';
import { Provider } from 'react-redux';
import store from './Redux/Store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<Info />} />
  
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
