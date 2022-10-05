
import React, { useState, useEffect } from 'react'

function ButtonAdd() {

    const [quantidade, setQuantity] = useState(
        (quantidade) => {
            return quantidade = 0;
        } 
    ) 

    function addWine() {
        setQuantity(quantidade + 1);
    }

    function removeWine() {
        if (quantidade > 0) {
            setQuantity(quantidade -1);
        }
    }



    return (
        <>
            <div className="btn__options"> <button onClick={removeWine}>-</button>  {quantidade} Garrafa  <button onClick={addWine}>+</button> </div>
        </>
    )
}

export default ButtonAdd