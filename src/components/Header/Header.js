import React from "react";
import Logo from "../../assets/images/logo.png"
import LogoText from "../../assets/images/logotext.png"
import "./Header.css"

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={Logo} className="logo-img" alt="Sportsee logo" />
                <img src={LogoText} className="logotext-img" alt="Sportsee" />
            </div>
            <div className="sections">
                <div className="section">
                    <p>Accueil</p>
                </div>
                <div className="section">
                    <p>Profil</p>
                </div>
                <div className="section">
                    <p>Réglages</p>
                </div>
                <div className="section">
                    <p>Communauté</p>
                </div>
            </div>
        </header>
    )
}

export default Header