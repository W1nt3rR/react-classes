import { differenceInMilliseconds, formatDistance, formatDistanceStrict, formatDuration, intervalToDuration } from "date-fns";
import { useState } from "react";
import { useEffect } from "react";

const Countdown = (props) => {

    const { toDate, fromDate } = props;

    const [ date, setDate ] = useState(new Date());
    

    const duration = intervalToDuration({
        start: date,
        end: new Date(2023, 6, 2, 0, 0, 5)
    })

    // const interval = formatDuration(duration, { delimiter: ", " });
    console.log(duration);

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000);
    })


    return (
        <div style={{ display: "flex" }}>
            {duration.years > 0 && <p>{duration.years}y, </p>}
            {duration.months > 0 && <p>{duration.months}m, </p>}
            {duration.days > 0 && <p>{duration.days}d, </p>}
            {duration.hours > 0 && <p>{duration.hours}h, </p>}
            {duration.minutes > 0 && <p>{duration.minutes}m, </p>}
            {duration.seconds > 0 && <p>{duration.seconds}s</p>}
        </div>
    )
}


export default Countdown;