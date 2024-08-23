import Header from './components/Header';
import Footer from './components/Footer';
import CartProduct from './CartProduct';
import SearchProduct from './SearchProduct';
import Home from './components/Home';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './ProductPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="cartproduct" element={<CartProduct />} />
            <Route path="searchproduct" element={<SearchProduct />} />
            <Route path='ProductPage' element={<ProductPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
