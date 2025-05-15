import React from "react";
import "./SpumaDeSare.css";

const products = [
    {
        category: "naturală",
        color: "#3DA2A4",
        items: [
            { image: "natural_5g.png", weight: "5 g", box: "192 buc/cutie" },
            { image: "natural_250g.png", weight: "250 g", box: "12 buc/cutie" },
            { image: "natural_125g.png", weight: "125 g", box: "6 buc/cutie" },
        ],
    },
    {
        category: "cu citrice",
        color: "#E4B40E",
        items: [{ image: "citrus_125g.png", weight: "125 g", box: "6 buc/cutie" }],
    },
    {
        category: "carbon vegetal și piper",
        color: "#777777",
        items: [{ image: "carbon_125g.png", weight: "125 g", box: "6 buc/cutie" }],
    },
];


const SpumaDeSare = () => {
    return (
        <div className="container">
            <header>
                <img class="bg" src="spumabg.png" />
            </header>
            <section className="product-gallery">
                <div className="product-card">
                    <div className="product-image-container">
                        <img src="spuma1.jpeg" alt="Natural Large" />
                    </div>
                    <div className="product-info">
                        <div className="info-row">
                            <span className="icon">⚖️</span> <span>100 g</span>
                        </div>
                        <div className="info-row">
                            <span className="icon">📦</span> <span>12 buc/cutie</span>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image-container">
                        <img src="spuma2.jpeg" alt="Natural Large" />
                    </div>
                    <div className="product-info">
                        <div className="info-row">
                            <span className="icon">⚖️</span> <span>100 g</span>
                        </div>
                        <div className="info-row">
                            <span className="icon">📦</span> <span>12 buc/cutie</span>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image-container">
                        <img src="spuma3.jpeg" alt="Natural Large" />
                    </div>
                    <div className="product-info">
                        <div className="info-row">
                            <span className="icon">⚖️</span> <span>100 g</span>
                        </div>
                        <div className="info-row">
                            <span className="icon">📦</span> <span>12 buc/cutie</span>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image-container">
                        <img src="spuma4.jpeg" alt="Natural Large" />
                    </div>
                    <div className="product-info">
                        <div className="info-row">
                            <span className="icon">⚖️</span> <span>100 g</span>
                        </div>
                        <div className="info-row">
                            <span className="icon">📦</span> <span>12 buc/cutie</span>
                        </div>
                    </div>
                </div>
            </section>






            <header>
                <div class="head-cont">
                    <img class="bg my-bg" src="spbg1.jpeg" />
                    <div className="head-cont2">
                        <img class="bg my-bg2" src="spbg2.jpeg" />
                        <img class="bg my-bg2" src="spbg3.jpeg" />
                    </div>
                </div>
            </header>
            <section className="product-gallery no-pad-gallery">
                <div className="card-container">
                    <div className="product-card">
                        <div className="product-image-container">
                            <img src="spnaturala.jpeg" alt="Natural Large" />
                        </div>
                        <div className="product-info2 info2">
                            <span className="text-span">naturală</span>
                            <div className="prod-inf">
                            <div>
                                <div className="info-row">
                                    <span className="icon">⚖️</span> <span>600g</span>
                                </div>
                                <div className="info-row">
                                    <span className="icon">📦</span> <span>4 buc/cutie</span>
                                </div>
                            </div>
                            <div>
                                <div className="info-row">
                                    <span className="icon">⚖️</span> <span>2kg</span>
                                </div>
                                <div className="info-row">
                                    <span className="icon">📦</span> <span>1 buc</span>
                                </div>
                            </div>
                            <div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-container" style={{ backgroundColor:"white", color:"black"}}>
                    <div className="product-card" style={{ backgroundColor:"white", color:"black"}}>
                        <div className="product-image-container">
                            <img src="sprosii.jpeg" alt="Natural Large" />
                        </div>
                        <div className="product-info2 info2">
                            <span className="text-span">roșii și busuioc</span>
                            <div className="prod-inf">
                            <div>
                                <div className="info-row">
                                    <span className="icon">⚖️</span> <span>600g</span>
                                </div>
                                <div className="info-row">
                                    <span className="icon">📦</span> <span>4 buc/cutie</span>
                                </div>
                            </div>
                            <div>
                                <div className="info-row">
                                    <span className="icon">⚖️</span> <span>2kg</span>
                                </div>
                                <div className="info-row">
                                    <span className="icon">📦</span> <span>1 buc</span>
                                </div>
                            </div>
                            <div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="product-card">
                        <div className="product-image-container">
                            <img src="spcitrice.jpeg" alt="Natural Large" />
                        </div>
                        <div className="product-info2 info2">
                            <span className="text-span">carbon vegetal și piper</span>
                            <div className="prod-inf">
                            <div>
                                <div className="info-row">
                                    <span className="icon">⚖️</span> <span>600g</span>
                                </div>
                                <div className="info-row">
                                    <span className="icon">📦</span> <span>4 buc/cutie</span>
                                </div>
                            </div>
                            <div>
                                <div className="info-row">
                                    <span className="icon">⚖️</span> <span>2kg</span>
                                </div>
                                <div className="info-row">
                                    <span className="icon">📦</span> <span>1 buc</span>
                                </div>
                            </div>
                            <div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-container" style={{ backgroundColor:"white", color:"black"}}>
                    <div className="product-card" style={{ backgroundColor:"white", color:"black"}}>
                        <div className="product-image-container">
                            <img src="spvegetal.jpeg" alt="Natural Large" />
                        </div>
                        <div className="product-info2 info2">
                            <span className="text-span">citrice</span>
                            <div className="prod-inf">
                            <div>
                                <div className="info-row">
                                    <span className="icon">⚖️</span> <span>600g</span>
                                </div>
                                <div className="info-row">
                                    <span className="icon">📦</span> <span>4 buc/cutie</span>
                                </div>
                            </div>
                            <div>
                                <div className="info-row">
                                    <span className="icon">⚖️</span> <span>2kg</span>
                                </div>
                                <div className="info-row">
                                    <span className="icon">📦</span> <span>1 buc</span>
                                </div>
                            </div>
                            <div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer1">
                <p>Importator și distribuitor în România</p>
                <p className="company">Aquabox Corporation S.R.L.</p>
                <p>📞 0757 502 395</p>
            </footer>
        </div>
    );
};

export default SpumaDeSare;
