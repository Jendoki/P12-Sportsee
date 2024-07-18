import { React, useState, useEffect } from 'react';
import Greeting from "./components/Greeting";
import Activities from "./components/graphs/Activities.js";
import SessionDuration from "./components/graphs/SessionDuration"
import Intensity from "./components/graphs/Intensity"
import Score from "./components/graphs/Score"
import Counts from "./components/Counts.js";
import "./PageContent.css"
import { userId } from "../../config.js"
//import the fetch functions to pass the data to other components
import { fetchUser, fetchUserActivity, fetchUserAverageSession, fetchUserPerformance } from "../../services/api/api.js"

function PageContent() {
    //states to keep data gotten from API
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [user, setUser] = useState()
    const [userActivity, setUserActivity] = useState()
    const [userAverageSession, setUserAverageSession] = useState()
    const [userPerformance, setUserPerformance] = useState()

    async function apiCalls() {
        setIsLoading(true)
        try {
            //wait for all the responses from API, then set those results in the states variables
            const results = await Promise.all([fetchUser(userId), fetchUserActivity(userId), fetchUserAverageSession(userId), fetchUserPerformance(userId)])
            setUser(results[0])
            setUserActivity(results[1])
            setUserAverageSession(results[2])
            setUserPerformance(results[3])
            setIsLoading(false)
        } catch (error) {
            console.log("error", error)
            setHasError(true)
            setIsLoading(false)
        }
    }

    //useEffect(function to execute, [parameters which, when changing, will call the function again. if no parameters, only call it once])
    //here, it is called when we arrive on the page
    useEffect(() => { apiCalls() }, [])

    if (hasError) {
        return (
            <p>Il y a une erreur !</p>
        )
    }

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div className="page-content">
            <Greeting name={user.userInfos.firstName} />
            <div className="page-content-container">
                <div className="activities-graphs-container">
                    <Activities activity={userActivity} />
                    <div className="graphs">
                        <SessionDuration duration={userAverageSession} />
                        <Intensity performance={userPerformance} />
                        <Score score={user.score} />
                    </div>
                </div>
                <Counts data={user.keyData} />
            </div>
        </div>
    )
}

export default PageContent