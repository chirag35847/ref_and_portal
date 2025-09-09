import {  useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({heading, targetTime}){
    const timerRef = useRef();
    const dialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);
    const isTimerActive = timeRemaining>0 && timeRemaining<targetTime*1000;

    if(timeRemaining <=0 ){
        dialog.current.open();
        clearInterval(timerRef.current);
    }

    function handleStartClick(){
        timerRef.current = setInterval(()=>{
            setTimeRemaining((currentTimeRem) => currentTimeRem-10);
        }, 10)
    }

    function handleStop(){
        dialog.current.open();
        clearInterval(timerRef.current);
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }

    return (
        <section className="challenge">
            <h2>{heading}</h2>
            <ResultModal ref={dialog} timeRemaining={timeRemaining} targetTime={targetTime} handleReset={handleReset} />
            <p className="challenge-time">
                {targetTime} {targetTime>1?'second':'seconds'}
            </p>

            <p>
                <button onClick={ isTimerActive? handleStop : handleStartClick}>{isTimerActive?"Stop":"Start"}</button>
            </p>

            <p>{isTimerActive?"Timer is running": "timer inacgive"}</p>
        </section>
    )
}