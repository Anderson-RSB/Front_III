import Garrafa from '../assets/Vinho_Tinto/vik_chile.png'
// import "../styles/pageStyle/WineProduct.css"
import ButtonCompra from '../components/ButtonCompra/index.jsx'

export default function WineProduct() {
  return (
    <>
      <div className="product_background">
                <img className="product_image" src={ Garrafa } alt=""/>
                <h1 className="wine_product_title">Vik</h1>
            </div>
            {/* informações */}
            <div className="d-flex flex-row justify-content-between align-items-center mt-5" >
                <span className="categoria_Vinho"><p>FRANÇA</p></span>
                <span className="categoria_Vinho"><p>VINHO TINTO</p></span>
                <span className="categoria_Vinho"><p>Millahue,2018</p></span>               
            </div>
            {/* box de preço */}
            <div className="card-body w-100 bg-dark p-3 d-flex justify-content-center">
                <div className="card-align justify-content-center">
                    <h5 className="card-title text-white justify-content-center">por: R${/* VAR PREÇO VINHO */}259,00</h5>
                    <p className="card-text text-white">ou 2x de R${/* PARCELA */}128,00</p>
                    <div className="d-flex">
                        <div >
                            <ButtonCompra />
                        </div>
                        {/* <ButtonRemove /> */}
                    </div>
                </div>
            </div>
            {/* descrição */}
            <div className="d-flex flex-row justify-content-between align-items-center mt-5">
                <ul>
                    <li className="categoria_Vinho">COMPOSIÇÃO UVA: Malbec</li>
                    <li className="categoria_Vinho">COR: Roxo intenso</li>
                    <li className="categoria_Vinho">TEOR ALCÓOLICO: 13%</li>
                </ul>
            </div> 
    </>
  );
}