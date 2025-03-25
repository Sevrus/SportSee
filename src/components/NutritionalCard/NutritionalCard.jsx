import "./NutritionalCard.css";

const NutritionalCard = ({icon, label, value, unit}) => {
    return (
        <div className="nutritional-card">
            <img src={icon} alt={label} className="nutritional-card__icon"/>
            <div className="nutritional-card__info">
                <p className="nutritional-card__value">
                    {value}{unit}
                </p>
                <p className="nutritional-card__label">{label}</p>
            </div>
        </div>
    );
}

export default NutritionalCard;
