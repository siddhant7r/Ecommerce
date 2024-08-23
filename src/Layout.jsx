
import Header from './components/Header';
import Footer from './components/Footer';
import CartProduct from './CartProduct';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';


const Layout=()=>{
 
  return(
    <>
    
    <Header/>
    <Outlet/>
    
   
    {/* <Home/> */}
   
    <Footer/>
    
    
   
    </>

  )
}
export default Layout;