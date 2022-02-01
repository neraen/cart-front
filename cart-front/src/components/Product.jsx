import React, {useState} from "react";
import QuantityField from "./QuantityField";

const ProductList = (props) => {

    //const [quantity, setQuantity] = useState(1);

    const handleLess = () => {
        if(props.product.quantity >= 1){
            props.product.quantity--;
        }
    }

    const handleMore = () => {
        props.product.quantity++;
    }



    return (
        <div className="product-card">
            {props.product.name}
            <QuantityField quantity={props.product.quantity} handleMore={handleMore} handleLess={handleLess}/>
            <div>prix unitaire : {props.product.price + " €"} </div>
            <div>total produit : {props.product.price * props.product.quantity + " €"} </div>
        </div>)
};

export default ProductList;