import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './theme/style.css';

import Layout from './components/layout';
import Home from './pages/home';
import Product from './pages/product';
import Auth from './pages/auth';
import ProductDetails from './pages/product-details';
import Cart from './pages/cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout children={<Home />} />} />
        <Route path='product' element={<Layout children={<Product />} />} />
        <Route
          path='product/:productId'
          element={<Layout children={<ProductDetails />} />}
        />
        <Route path='sign-up' element={<Layout children={<Auth />} />} />
        <Route path='Cart' element={<Layout children={<Cart />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
