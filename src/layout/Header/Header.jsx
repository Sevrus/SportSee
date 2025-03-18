import "./Header.css"
import logo from "../../assets/images/logo_sportsee.svg";

const Header = () => {
    return (
        <header className="header">
            <a href="/public" className="header__logo-link">
                <img className="header__logo" src={logo} alt="Le logo de SportSee" />
            </a>

            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><a href="#">accueil</a></li>
                    <li className="header__nav-item"><a href="#">profil</a></li>
                    <li className="header__nav-item"><a href="#">réglage</a></li>
                    <li className="header__nav-item"><a href="#">communauté</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
