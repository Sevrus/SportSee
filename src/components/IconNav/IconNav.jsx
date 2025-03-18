import IconZen from "../../assets/images/icon/zen.svg";
import IconSwim from "../../assets/images/icon/swim.svg";
import IconBicycle from "../../assets/images/icon/bicycle.svg";
import IconDumbbell from "../../assets/images/icon/dumbbell.svg";
import "./IconNav.css"

const IconNav = () => {
    return (
        <nav className="icon-nav">
            <a href="#">
                <img className="icon-img" src={IconZen} alt="Une icone représentant une personne en position du lotus"/>
            </a>
            <a href="#">
                <img className="icon-img" src={IconSwim} alt="Une icone représentant un nageur"/>
            </a>
            <a href="#">
                <img className="icon-img" src={IconBicycle} alt="Une icone représentant une bicyclette"/>
            </a>
            <a href="#">
                <img className="icon-img" src={IconDumbbell} alt="Une icone représentant des haltères"/>
            </a>
        </nav>
    );
}

export default IconNav;
