import React, { useState } from 'react'
import { BsTrash } from 'react-icons/bs'

export default function ButtonRemove() {

    const removeWine = document.querySelector('#remove_wine')

    const [quantidade, setRemoveProduct] = useState(
        (quantidade) => {
            return quantidade = 0;
        } 
    )  

    function removeAll() {
        console.log("clicou")
        /* (quantidade) => {
            return quantidade = 0;
        } */
    }

    return (
        <>
            <div className="btn btn-primary bg-dark border-dark border-rounded"> 
                <button id='remove_wine' className="btn btn-primary bg-dark rounded-circle border border-dark" onClick={(removeAll)/*   => setRemoveProduct( quantidade ) */}><BsTrash /></button>
            </div>
        </>
    )
}