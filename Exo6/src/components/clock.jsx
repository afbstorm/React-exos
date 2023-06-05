import { useState, useEffect } from "react"

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 200)
        return () => clearInterval(interval)
    }, [])

    return(
        <div>
            <p>{time}</p>
        </div>
    )
}

export default Clock;