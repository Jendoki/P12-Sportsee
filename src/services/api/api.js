import axios from 'axios';
import { fetchFromApi } from "../../config.js";
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from "../../assets/data/mocks.js"

const fetchUser = async (userId) => {
    if (fetchFromApi) {
        const response = await axios.get(`http://localhost:5000/user/${userId}`);
        const result = formatUser(response.data.data)
        return result;
    } else {
        const result = formatUser(USER_MAIN_DATA)
        return result;
    }
}

function formatUser(user) {
    console.log(user)
    const keyMap = {
        calorieCount: "Calories",
        proteinCount: "Protéines",
        carbohydrateCount: "Glucides",
        lipidCount: "Lipides"
    };

    let newKeyData = {};
    Object.keys(user.keyData).forEach(key => {
        const newKey = Object.keys(keyMap).find(k => key.toLowerCase().includes(k.toLowerCase()));
        if (newKey) {
            newKeyData[keyMap[newKey]] = user.keyData[key];
        } else {
            newKeyData[key] = user.keyData[key];
        }
    });

    if (user.score === undefined) {
        user.score = user.todayScore
    }

    user.score = user.score * 100;
    user.keyData = newKeyData;
    return user;
}

const fetchUserActivity = async (userId) => {
    if (fetchFromApi) {
        const response = await axios.get(`http://localhost:5000/user/${userId}/activity`);
        const result = formatUserActivity(response.data.data)
        return result;
    } else {
        const result = formatUserActivity(USER_ACTIVITY);
        return result;
    }
}

function formatUserActivity(userActivity) {
    const days = ["1", "2", "3", "4", "5", "6", "7"];
    userActivity.sessions.forEach((session, index) => {
        session.day = days[index];
    });
    return userActivity;
}

const fetchUserAverageSession = async (userId) => {
    if (fetchFromApi) {
        const response = await axios.get(`http://localhost:5000/user/${userId}/average-sessions`);
        const result = formatUserAverageSession(response.data.data);
        return result;
    } else {
        const result = formatUserAverageSession(USER_AVERAGE_SESSIONS)
        return result;
    }
}

function formatUserAverageSession(userAverageSession) {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    userAverageSession.sessions.forEach((session, index) => {
        session.day = days[index];
    });
    return userAverageSession;
}

const fetchUserPerformance = async (userId) => {
    if (fetchFromApi) {
        const response = await axios.get(`http://localhost:5000/user/${userId}/performance`);
        const result = formatUserPerformance(response.data.data);
        return result;
    } else {
        const result = formatUserPerformance(USER_PERFORMANCE)
        return result;
    }
}

function formatUserPerformance(userPerformance) {
    let result = userPerformance.data.map(obj => {
        switch (obj.kind) {
            case 1:
                obj.kind = "Cardio";
                break;
            case 2:
                obj.kind = "Energie";
                break;
            case 3:
                obj.kind = "Endurance";
                break;
            case 4:
                obj.kind = "Force";
                break;
            case 5:
                obj.kind = "Vitesse";
                break;
            case 6:
                obj.kind = "Intensité";
                break;
            default:
                break;
        }
        return obj;
    });
    return result.reverse();
}

export { fetchUser, fetchUserActivity, fetchUserAverageSession, fetchUserPerformance };