import Clock from "./clock"
import DateOfDay from "./dateOfDay";
import { useState } from "react";

const Time = () => {

    const [displayClock, setDisplayClock] = useState(true);

    const toggleDisplay = () => {
        setDisplayClock(!displayClock);
      };

    return (
        <div>
            <button onClick={toggleDisplay}>Toggle Clock</button>
            {displayClock ? <Clock /> : <DateOfDay />}
        </div>
    )
}

export default Time;

