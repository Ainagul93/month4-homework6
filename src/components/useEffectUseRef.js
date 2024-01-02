import React, {useEffect, useRef, useState} from 'react';

const StopTimer = () => {
    const [seconds, setSeconds]= useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        const timer = () => {
            setSeconds((prevSeconds) => prevSeconds + 1)

            }
        intervalRef.current = setInterval(timer,1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, []);
    return (
        <div>
            <p> Прошло времени: {seconds} секунд </p>
            <button onClick={()=>clearInterval(intervalRef.current)}> Остановить Таймер </button>
        </div>
    )
}

export default StopTimer