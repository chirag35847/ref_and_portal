import { useState, useRef } from "react"

export default function TimerChallenge({heading, targetTime}){
    const timerRef = useRef();
    const [timerStarted, setTimerStated] = useState(false);
    const [hasTimerExpired, setTimerExpired] = useState(false);

    function handleStartClick(){
        timerRef.current = setTimeout(()=>{
            setTimerExpired(true);
        }, targetTime*1000)
        setTimerStated(true);
    }

    function handleStop(){
        clearTimeout(timerRef.current);
    }

    return (
        <section className="challenge">
            <h2>{heading}</h2>
            {hasTimerExpired && <p>You Lost!!</p>}
            <p className="challenge-time">
                {targetTime} {targetTime>1?'second':'seconds'}
            </p>

            <p>
                <button onClick={ timerStarted? handleStop : handleStartClick}>{timerStarted?"Stop":"Start"}</button>
            </p>

            <p>{timerStarted?"Timer is running": "timer inacgive"}</p>
        </section>
    )
}