import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";

export default function ResultModal({ref, timeRemaining, targetTime, handleReset}){
    const dialogRef = useRef();

    // console.log()
    const timeRemainingFormatted = (timeRemaining/1000).toFixed(2);
    const score = Math.floor((1 - (timeRemaining/(targetTime*1000)))*100);

    useImperativeHandle(ref, ()=>{
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    })

    return createPortal( (
        <dialog ref={dialogRef} className="result-modal">
            <h2>{timeRemaining<=0?"You Lost":"You Win!!"}</h2>
            <p>
                Your target time was <strong>{targetTime}</strong> second.
            </p>
            <p>
                You stopped the timer with <strong>{timeRemainingFormatted} seconds left</strong> Your score is {score}
            </p>

            <form method="dialog">
                <button onClick={handleReset}>Close</button>
            </form>
        </dialog>
    ), document.getElementById("modal") )
}