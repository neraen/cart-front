import React, {useState} from "react";
import Product from "./Product";

const ProductList = () => {
        const products = [{name: "veste", price: "100"}, {name: "pantalon", price: "120"}, {name: "t-shirt", price: "30"}, {name: "chaussure", price: "50"}];

        const [productsUser, setProductsUser]  = useState([{name: "veste", price: "100", quantity: 1},
            {name: "pantalon", price: "120", quantity: 1},
            {name: "t-shirt", price: "30", quantity: 1},
            {name: "chaussure", price: "50",quantity: 1}])

        const handleProductChange = (products) => {
            setProductsUser(products);
        }

        const getTotal = () => {
            let total = 0;
            productsUser.map(product => {
                total += product.price * product.quantity
            })
            return total;
        }

        return(
            <div className="product-list">
                {productsUser.map(product => <Product handleProductChange={handleProductChange} product={product}/>)}
                {getTotal()}
            </div>

        )
}




export default ProductList;