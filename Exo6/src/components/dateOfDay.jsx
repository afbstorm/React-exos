const DateOfDay = () => {

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateStr = day + "/" + month + "/" + year;

    return (
        <div>
            <p>{dateStr}</p>
        </div>
    )
}

export default DateOfDay;