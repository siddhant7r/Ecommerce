import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { cartrecDel,addQnty,DelQnty } from "./components/cartSlice";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartProduct = () => {
  const mycart = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const cartRecDel = (id) => {
    dispatch(cartrecDel(id));
  };

const qtyInc=(id)=>{
  dispatch(addQnty(id))
}

const qtyDec=(id)=>{
dispatch(DelQnty(id))
}


const checkOut=()=>{
  navigate("/checkout");

}


  let totalAmount = 0;

  const ans = mycart.map((key) => {
    totalAmount += key.price*key.qnty;
    // console.log(typeof(key.qnty))

    return (
      <tr key={key.id}> 
        <td>
          <img 
            src={`/images/${key.image}`} 
            width="100" 
            height="80" 
            alt={key.name}
          />
        </td>
        <td>{key.name}</td>
        <td>{key.description}</td>
        <td>{key.price}</td>
        <td>

        <a href="#"> 
                <FaMinusCircle onClick={()=>{qtyDec(key.id)}} />
                
               </a>
                   
                   <span style={{paddingLeft:"5px", paddingRight:"5px", fontWeight:"bold"}}> {key.qnty}  </span>
                  
                  <a href="#">
                  <FaPlusCircle onClick={()=>{qtyInc(key.id)}} />
                  </a>
                  
                   
                    
                </td>
                <td> {key.price*key.qnty} </td>
                <td> 
          <Button
            variant="success"
            size="sm"
            onClick={() => {cartRecDel(key.id); }}>
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1 align="center">Cart Items</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {ans}

          <tr>
            <td colSpan="2"></td> 
            <td></td>
            <td></td>
            <td>Total Cost:</td>
            <td>{totalAmount}</td>
            <td></td>
          </tr>
          <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>  </th>
          <th>  </th>
          <th>

          <Button variant="success" onClick={checkOut}>CheckOut</Button>

          </th>
          <th></th>
        </tr>
        </tbody>
      </Table>
    </>
  );
};

export default CartProduct;
