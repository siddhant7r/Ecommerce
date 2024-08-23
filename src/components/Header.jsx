import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
 

const Header = () => {
  const myCart = useSelector((state) => state.mycart.cart);
  const dataLength = myCart.length;
  const navigate = useNavigate();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to ="home">Plants</Nav.Link>
              <Nav.Link as={Link} to ="app">Pricing</Nav.Link>
              <Nav.Link as={Link} to ="ProductPage">ProductPage</Nav.Link>

              </Nav>
              <Nav   style={{ position: "relative", left: "-550px" }} >
              <Navbar.Brand
                href="#home" 
                style={{
                  color: "green", 
                  fontFamily:"monospace"  , 
                  fontSize: "35px"
                }}
              >
                Gardenizer
              </Navbar.Brand>
              </Nav>
            
            <Nav>
              <FaCartArrowDown 
                onClick={() => { navigate("/cartproduct") }} 
                style={{ cursor: "pointer" }} 
              />
              {dataLength >= 1 && (
                <span id="tokri" style={{ marginLeft: "10px" }}> 
                  {dataLength} 
                </span>
              )}  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
