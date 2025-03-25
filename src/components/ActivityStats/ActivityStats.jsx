import {useEffect, useState} from "react";
import fetchUserData from "../../services/fetchUserData.js";
import DailyActivity from "../DailyActivity/DailyActivity.jsx";
import NutritionalInfo from "../NutritionalInfo/NutritionalInfo.jsx";
import "./ActivityStats.css";

const ActivityStats = ({userId}) => {
    const [dailyActivity, setDailyActivity] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    const [averageSessions, setAverageSessions] = useState(null);
    const [userScore, setUserScore] = useState(null);
    const [keyData, setKeyData] = useState(null);


    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [
                    activityData,
                    performanceData,
                    averageSessionsData,
                    userData
                ] = await Promise.all([
                    fetchUserData('USER_ACTIVITY', userId),
                    fetchUserData('USER_PERFORMANCE', userId),
                    fetchUserData('USER_AVERAGE_SESSIONS', userId),
                    fetchUserData('USER_MAIN_DATA', userId)
                ]);

                const formattedActivityData = {
                    ...activityData,
                    sessions: activityData.sessions.map(session => ({
                        day: parseInt(session.day.split("-")[2], 10),
                        kilogram: session.kilogram,
                        calories: session.calories
                    }))
                };

                const formattedAverageSessions = {
                    ...averageSessionsData,
                    sessions: averageSessionsData["sessions"].map((session) => ({
                        day: session["day"],
                        sessionLength: session["sessionLength"],
                    })),
                };

                const formattedPerformanceData = performanceData["data"].map((item) => ({
                    value: item["value"],
                    kind: item["kind"]
                }));

                const {keyData} = userData;

                const userFormattedScore =
                    userData["todayScore"] || userData["score"] || 0;

                setDailyActivity(formattedActivityData);
                setPerformanceData(formattedPerformanceData);
                setAverageSessions(formattedAverageSessions);
                setUserScore(userFormattedScore);
                setKeyData(keyData);
            } catch (error) {
                console.error("Erreur lors de la récupération des statistiques :", error);
            }
        };
        fetchStats();
    }, [userId]);

    return (
        <div className="activity-stats">
            <div className="activity-stats__left">
                {dailyActivity && averageSessions && userScore && performanceData
                    ? <DailyActivity
                        data={dailyActivity}
                        averageSessions={averageSessions}
                        userScore={userScore}
                        performanceData={performanceData}
                    />
                    : <p>Chargement des activités...</p>
                }
            </div>

            {dailyActivity
                ? <NutritionalInfo data={keyData}/>
                : <p>Chargement des infos nutritionnelles...</p>
            }

        </div>

    );
}

export default ActivityStats;
