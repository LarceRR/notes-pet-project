import React, { useEffect, useState } from 'react';

const DatePlaceholder = () => {

    const [day, setDay] = useState<string>('')
    const [dayOfWeek, setDayOfWeek] = useState<string>('')
    const [month, setMonth] = useState<string>('')

    const dayOfWeeksArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    setInterval(() => {
        setDay(String(new Date().getDate()))
        setDayOfWeek(String(dayOfWeeksArray[new Date().getDay()]))
        setMonth(String(monthNames[new Date().getMonth()]))
    }, 1000);

    return (
        <p>{`${dayOfWeek}, ${day} ${month}`}</p>
    );
};

export default DatePlaceholder;