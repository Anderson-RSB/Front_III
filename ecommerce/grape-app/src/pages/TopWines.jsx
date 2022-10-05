// import Footer from '../components/Footer'

function MelhoresVinhos() {
  return (
    <>
      <section className="MelhoresVinhos">
        <div className="titulo_mv">
          <p className="titulo_margin">Melhores Vinhos</p>
        </div>

        {/* ___________ Vinhos 1 2 3 ___________ */}
        <div className="bestTres">
          {/* vinho 1 */}
          <div className="alinhar_mv">
            <div className="alinharUm">
              <div className="Um">
                <p>1</p>
              </div>
              <div className="best1"></div>

              <div className="descricaoVinho">
                <p className="titulo_Vinho">Vik</p>
                <p className="categoria_Vinho">
                  {" "}
                  V I N H O&nbsp;&nbsp; T I N T O
                </p>
              </div>
            </div>
          </div>

          <div className="bestDois">
            {/* vinho 2 */}
            <div className="alinhar_mv">
              <div className="alinharDoisTres">
                <div className="DoisTres">
                  <p>2</p>
                </div>
                <div className="best2"></div>

                <div className="descricaoVinho">
                  <p className="tituloVinho">Cliquot</p>
                  <p className="categoriaVinho">
                    {" "}
                    V I N H O&nbsp;&nbsp; B R A N C O
                  </p>
                </div>
              </div>
            </div>
            {/* vinho 3 */}
            <div className="alinhar_mv">
              <div className="alinharDoisTres">
                <div className="DoisTres">
                  <p>3</p>
                </div>
                <div className="best3"></div>

                <div className="descricaoVinho">
                  <p className="tituloVinho">Calitera</p>
                  <p className="categoriaVinho">
                    {" "}
                    V I N H O&nbsp;&nbsp; T I N T O
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="boxwine">
          <div className="alinhar4">
            <div className="vinho4"></div>
            <div className="vinho5 "></div>
            <div className="vinho6"></div>
            <div className="vinho7"></div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default MelhoresVinhos;