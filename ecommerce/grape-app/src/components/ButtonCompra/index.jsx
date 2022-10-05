import { useParams, Link} from 'react-router-dom';
import React, { useState, createContext } from 'react'
import { BsTrash } from 'react-icons/bs'
import { useEffect } from 'react';


export const CartContext = createContext();

export default function ButtonCompra() {

   

    const cart = [
        {
            id: 1,
            quantity: 1
        }
    ]
    
    
    function addProductToCart() {
        /* const [wine, setWine] = useState(''); */
        const [wineCount, setWineCount] = useState(0);

        useEffect(() => {

            document.title = wineCount;

        });

    }
    
    return (
        <>
            <div className=' d-flex'>
                <div className="btn btn-primary bg-dark border-light border-rounded"> 
                    <button id='remove_wine' className="btn btn-primary bg-dark rounded-circle border border-dark" /* onClick={removeProductFromCart} */>
                        -
                    </button>
                    {/* {wineCount} */}
                    <button className="btn btn-primary bg-dark rounded-circle border border-dark" onClick={() => setWineCount(wineCount + 1)}>
                        +
                    </button> 
                </div>
                <button id='remove_wine' className="btn btn-primary bg-dark rounded-circle border border-dark" /* onClick={cleanCart} */><BsTrash /></button>
            </div>

            <button className="btn btn-primary bg-white round-circle border border-white text-dark m-3" onClick={<Link to={`/Carrinho`}>{/* {wines} */}</Link>}>Comprar</button>
        </>
    )
}