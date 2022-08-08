import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './theme/style.css';

const Layout = lazy(() => import('components/layout'));
const Home = lazy(() => import('pages/home'));
const Product = lazy(() => import('pages/product'));
const Auth = lazy(() => import('pages/auth'));
const ProductDetails = lazy(() => import('pages/product-details'));
const Cart = lazy(() => import('pages/cart'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
