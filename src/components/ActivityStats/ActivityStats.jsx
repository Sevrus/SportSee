import {useEffect, useState} from "react";
import fetchUserData from "../../services/fetchUserData.js";
import DailyActivity from "../DailyActivity/DailyActivity.jsx";
import NutritionalInfo from "../NutritionalInfo/NutritionalInfo.jsx";

const ActivityStats = ({userId}) => {
    const [dailyActivity, setDailyActivity] = useState(null);
    const [nutritionalInfo, setNutritionalInfo] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [activityData, performanceData] = await Promise.all([
                    fetchUserData('USER_ACTIVITY', userId),
                    fetchUserData('USER_PERFORMANCE', userId),
                ]);

                console.log("Données brutes USER_ACTIVITY :", activityData);

                const formattedActivityData = {
                    ...activityData,
                    sessions: activityData.sessions.map(session => ({
                        day: parseInt(session.day.split("-")[2], 10),
                        kilogram: session.kilogram,
                        calories: session.calories
                    }))
                };
                console.log("Données formatées :", formattedActivityData);

                setDailyActivity(formattedActivityData);
                setNutritionalInfo(performanceData);
            } catch (error) {
                console.error("Erreur lors de la récupération des statistiques :", error);
            }
        };
        fetchStats();
    }, [userId]);

    return (
        <div className="activity-stats">
            <div className="activity-stats__left">
                {dailyActivity
                    ? <DailyActivity data={dailyActivity} />
                    : <p>Chargement des activités...</p>
                }
            </div>
            <div className="activity-stats__right">
                {nutritionalInfo
                    ? <NutritionalInfo data={nutritionalInfo} />
                    : <p>Chargement des infos nutritionnelles...</p>
                }
            </div>
        </div>

    );
}

export default ActivityStats;
