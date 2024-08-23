import { useLocation } from "react-router-dom"


const ProductPage=()=>{

const location=useLocation();
const data=location.state;

console.log(data);

    return (
        <>
        <div className="products">
        <h1>Plant Name:{data.name}</h1>
        <h2>Plant Description:{data.description}</h2>
        <img style={{width:"500px", height:"400px" }} src={"Images/" + data.images} />
        </div>
        </>
    )
}

export default ProductPage;