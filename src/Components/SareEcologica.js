import React from "react";
import "./SareEcologica.css";

const EcoSaltPage = () => {
  return (
    <div className="container2">
      {/* Header */}
      <div className="header2">
        <img src="background.jpg" alt="Background" className="header-image2" />
      </div>

      {/* Introduction */}
      <div className="first-row">

      <section className="introduction2">
        <p>
          Datorită activității sale de exploatare a sării, Bras del Port a creat un ecosistem de bogăție inegalabilă, în care, de mai bine de un secol, vântul și soarele au fost și continuă să fie cei mai mari aliați ai noștri în obținerea sării marine complet naturale.
        </p>
      </section>

      {/* Product Sections */}
        {/* Fine Salt */}
        <div className="product-card3">
        <h2>SARE MARINĂ ECOLOGICĂ</h2>
        <h2 className="product-type2">fină</h2>
        <div className="flex">
          <img src="fina.png" alt="Fine Salt" className="product-image2" />
          <div className="info">
          <div className="info-row">
          <span className="icon">⚖️</span> <span>1kg</span>
            </div>
            <div className="info-row">
          <span className="icon">📦</span> <span>12 buc/bax</span>
            </div>
          </div>
          </div>
        </div>

        {/* Coarse Salt */}
        <div className="product-card3">
        <h2>SARE MARINĂ ECOLOGICĂ</h2>
        <h2 className="product-type2">grunjoasă</h2>
        <div className="flex">
          <img src="grunjoasa.png" alt="Fine Salt" className="product-image2" />
          <div className="info">
          <div className="info-row">
          <span className="icon">⚖️</span> <span>1kg</span>
            </div>
            <div className="info-row">
          <span className="icon">📦</span> <span>12 buc/bax</span>
            </div>
          </div>
          </div>
        </div>

        </div>

        <div className="first-row second">

{/* Product Sections */}
  {/* Fine Salt */}
  <div className="product-card3">
  <h2>SARE MARINĂ ECOLOGICĂ</h2>
  <h2 className="product-type2">uscată</h2>
  <div className="flex">
    <img src="uscata.png" alt="Fine Salt" className="product-image2" />
    <div className="info">
    <div className="info-row">
        <span>Fină T1</span>
        </div>
        <div className="info-row">
       
        <span>Grunjoasă T2</span>
        </div>
        <div className="info-row">
        <span>Extre Grunjoasă T3</span>
        </div>
    <div className="info-row">
    <span className="icon">⚖️</span> <span>25kg</span>
      </div>
      <div className="info-row">
    <span className="icon">📦</span> <span>40 buc/palet</span>
      </div>
    </div>
    </div>
  </div>

  {/* Coarse Salt */}
  <div className="product-card3">
  <h2>SARE MARINĂ ECOLOGICĂ</h2>
  <h2 className="product-type2">umedă</h2>
  <div className="flex">
    <img src="umeda.png" alt="Fine Salt" className="product-image2" />
    <div className="info">
    <div className="info-row">
        <span>Extra fină Molidă</span>
        </div>
        <div className="info-row">
        <span>Fină cero</span>
        </div>
        <div className="info-row">
        <span>Grunjoasă Formeto</span>
        </div>
        <div className="info-row">
        <span>Extra grunjoasă Gruesa</span>
        </div>
        <div className="info-row">
        <span>Extra grunjoasă Salazon</span>
        </div>
    <div className="info-row">
    <span className="icon">⚖️</span> <span>25kg</span>
      </div>
      <div className="info-row">
    <span className="icon">📦</span> <span>40 buc/palet</span>
      </div>
    </div>
    </div>
  </div>

  </div>
      {/* Footer */}
      <footer className="footer2">
        <p>Importator și distribuitor în România</p>
        <p className="company">Aquabox Corporation S.R.L.</p>
        <p>📞 0757 502 395</p>
      </footer>
    </div>
  );
};

export default EcoSaltPage;
