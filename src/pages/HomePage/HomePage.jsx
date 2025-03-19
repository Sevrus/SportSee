import "./HomePage.css";
import {useEffect, useState} from "react";
import fetchUserData from "../../services/fetchUserData.js";
import ActivityStats from "../../components/ActivityStats/ActivityStats.jsx";

const HomePage = () => {
    const [userName, setUserName] = useState("");
    const [userId] = useState(12);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await fetchUserData("USER_MAIN_DATA", userId);
                setUserName(userData["userInfos"]["firstName"]);
            } catch (error) {
                console.error("Erreur lors de la récupération des données utilisateur :", error
                );
            }
        };
        fetchUser();
    }, [userId]);

    return (
        <>
            <h1 className="content-title">Bonjour <span className="content-title__span">{userName}</span></h1>
            <p className="content-subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <ActivityStats userId={userId} />
        </>
    );
}

export default HomePage;
