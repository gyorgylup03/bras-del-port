import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="page-container">
      
    {/* Titok a tengerről */}
    <section className="products">
      <img src="logo.png"/>
      <div className="text-cont">
      <h2>SECRETUL MĂRII</h2>
      <h3>De mai bine de un secol, vântul și soarele au fost și continuă să fie cei mai mari aliați ai noștri în obținerea unui tip de sare marină complet natural.</h3>
        <br/>
        <p>”
În spatele unei activități aparent simple, precum producerea sării marine, se ascunde o muncă milenară complexă.
Echilibrul dintre tradiția moștenită din vremea Imperiului Roman și inovația constantă în tehnologie și dezvoltarea cunoașterii joacă un rol esențial în garantarea calității produsului nostru."</p>
   </div>
   </section>

    {/* Sómezők háttérkép */}
    <section className="landscape">
      <div className="text-cont">
      <h2>PEISAJUL SALINELOR</h2>
      <p>Un peisaj natural de peste 2500 de hectare.
Salinele maritime Bras del Port se întind pe mai mult de 2.500 de hectare, ocupate în mare parte de lagune în care se concentrează apa mării și unde se cristalizează sarea.
Exploatarea salinelor, responsabilă de conservarea zonei umede, a creat un habitat de o valoare ecologică și peisagistică excepțională.</p>
   </div> 
   </section>

    {/* Innováció és fejlesztés - sárga szekció
    <section className="innovation">
      <h2>INOVAȚIE ȘI DEZVOLTARE</h2>
      <p>Piatra de temelie a filozofiei Bras del Port.
      Cercetarea, dezvoltarea și inovația au devenit, într-un timp foarte scurt, piatra de temelie a filozofiei Bras del Port. Răspunzând unui segment de piață din ce în ce mai exigent, ne orientăm eforturile către diversificarea produsului nostru pentru o multitudine de aplicații.</p>
      <button>See More</button>
    </section> */}

    {/* Termékek - kék szekció */}
    <section className="secret-sea">
      <div className="text-cont">
      <h2>PRODUSELE NOASTRE</h2>
      <div className="product-grid">
        <div className="product-item">
          <p>Continuând angajamentul nostru față de inovație, am dezvoltat o gamă completă de produse gourmet capabile să surprindă chiar și cele mai exigente gusturi. Descoperă fulgii noștri și spumele noastre din sare marină.</p>
        </div>
        <div className="title-cont">
        <a href="/sare-ecologica" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3>SARE ECOLOGICĂ</h3>
        </a>
        <a href="/spuma-de-sare-marina" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3>SPUMĂ DE SARE</h3>
        </a>
        <a href="/fulgi-de-sare-marina" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3>FULGI DE SARE</h3>
        </a>
        </div>
      </div>
      </div>
    </section>
    </div>
  );
}
