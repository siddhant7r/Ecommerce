import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from "/Images/tulipcar.jpg";
import img1 from "/Images/car2.jpg";
import img2 from "/Images/gar3.jpg";
import { useDispatch } from 'react-redux';
import { addtoCart } from './cartSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();

    const loadData = () => {
        let api = "http://localhost:3000/product";
        axios.get(api).then((res) => {
            setMydata(res.data);
        });
    }

    useEffect(() => {
        loadData();
    }, []);

    const DataCart = (pid, nm, img, desc, price) => {
        dispatch(addtoCart({ id: pid, name: nm, image: img, description: desc, price: price ,qnty:1}));
    }
   const navigate=useNavigate()
    const goProduct=(key)=>{
        navigate("/ProductPage",{state:key})
    }

    const ans = mydata.map((key) => {
        return (
            <Col key={key.id}>
                <Card style={{ width: '17rem' }}>
                    <Card.Img style={{ width: "250px", height: "250px" }} variant="top" src={"Images/" + key.images} />
                    <Card.Body>
                        <Card.Title onClick={()=>{goProduct(key)}}>{key.name}</Card.Title>
                        <Card.Text>{key.description}</Card.Text>
                        <h5>Price: {key.price}</h5>
                        <Button
                            variant="primary"
                            onClick={() => { DataCart(key.id, key.name, key.images, key.description, key.price) }}
                        >
                            Add To Cart
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    });

    return (
        <>
            <Carousel slide={false} style={{ marginLeft: "29px" }}>
                <Carousel.Item>
                    <img src={img} alt="" height="500px" width="97%" />
                    <Carousel.Caption>
                        <h3>Gardens</h3>
                        <p>This is how your final Garden will look like</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img1} alt="" height="500px" width="97%" />
                    <Carousel.Caption>
                        <h3>Greenery</h3>
                        <p>Beautiful Garden</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} alt="" height="500px" width="97%" />
                    <Carousel.Caption>
                        <h3>Balcony</h3>
                        <p>Beautiful garden with many plants</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <h2 style={{ fontFamily: "inherit", fontSize: "40px", textAlign: "center" ,marginTop:"20px"}}>The Services we Offer</h2>
            </div>

            <Container>
                <Row>
                    {ans}
                </Row>
            </Container>
        </>
    )
}

export default Home;
