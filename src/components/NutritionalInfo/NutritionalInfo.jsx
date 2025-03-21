import calorieIcon from "../../assets/images/icon/calories-icon.svg";
import proteinIcon from "../../assets/images/icon/protein-icon.svg";
import carbIcon from "../../assets/images/icon/carbs-icon.svg";
import fatIcon from "../../assets/images/icon/fat-icon.svg";
import NutritionalCard from "../NutritionalCard/NutritionalCard.jsx";
import "./NutritionalInfo.css";

const NutritionalInfo = ({data}) => {
    console.log("Data : ", data);
    const {calorieCount, proteinCount, carbohydrateCount, lipidCount} = data;

    const nutritionalCards = [
        { icon: calorieIcon, label: "Calories", value: calorieCount, unit: "kCal" },
        { icon: proteinIcon, label: "Protéines", value: proteinCount, unit: "g" },
        { icon: carbIcon, label: "Glucides", value: carbohydrateCount, unit: "g" },
        { icon: fatIcon, label: "Lipides", value: lipidCount, unit: "g" },
    ];


    return (
        <div className="nutritional-info">
            {nutritionalCards.map((card, index) => (
                <NutritionalCard
                    key={index}
                    icon={card.icon}
                    label={card.label}
                    value={card.value}
                    unit={card.unit}
                />
            ))}
        </div>

    );
}

export default NutritionalInfo;
