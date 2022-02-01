import React from "react";

const QuantityField = (props) => {
    return (
        <>
            <button onClick={props.handleLess}>-</button>
            <input type="number" value={props.quantity} disabled={true}/>
            <button onClick={props.handleMore}>+</button>
        </>
    )

};

export default QuantityField;