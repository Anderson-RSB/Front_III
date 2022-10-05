import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import Garrafa from '../assets/Vinho_Tinto/calitera.png'
import ButtonAdd from '../components/ButtonAdd'
// import Footer from '../components/Footer'
import { Button } from "react-bootstrap";

function ShoppingCart(){

const {cart, setCart} = useContext(ProductContext);

const [selectProduct, setSelectProdutc] = useState([]);

useEffect(() => {
    if(localStorage.getItem("Products") != null){
        setCart(JSON.parse(localStorage.getItem("Products")))
        setSelectProdutc(cart)
    }
},
[

]
)

console.log(cart);

// const itens = cart.map((products) => (products.map((products))))

// console.log(itens);

// useEffect(()=>{
        
//     setCart(JSON.parse(localStorage.getItem("Products")))
// })

// setCart(... {id:3, title: 'Sangue de boi'}); 
// const [setWines] = useContext(ProductProvider); 
// setWine(... {id:3, title:"Galioto"});


function removeNoLocal(id){

    const carrinho = JSON.parse(localStorage.getItem('Products'))
    const listaAtualizada = carrinho.map((produto) => produto.filter((wine) => wine.id != id))
    console.log(listaAtualizada, id)

    localStorage.setItem("Products", JSON.stringify(listaAtualizada))
    window.location.reload();
}


    return(
        <>
        <div className="shoppingCart">
        <div className="shoppingCart__Card">
            <h1>Compras</h1>
            <div className="purchaseSummary">
                <div className="itemPurchase"> <img src={ Garrafa } alt="" /> </div>
                <div className="purchaseOptions"> 
                <h2>Calitera</h2>    
                <ButtonAdd />          
                </div>
            </div>
            <Button className="bg-danger text-light" variant="outline-danger" onClick={() => {localStorage.clear()
            window.location.reload()}}>LIMPAR TUDO</Button>
            <ul className="bg-dark"
            style={{ width: "100vw", height: "30vh"}}>


            {cart.map((products) => products.map((wine) => 
            <li className="text-light">{wine.description}
             <button onClick={() => removeNoLocal(wine.id)}>Remove</button></li> ) 
                
            
            )}

            
            </ul>
        </div>
        </div>
        {/* <Footer /> */}
        </>
    )
}





export default ShoppingCart

