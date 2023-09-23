import { useState } from 'react';

const Time = () => {
    
    const [hours, setHours] = useState<string>('')
    const [minutes, setMinutes] = useState<string>('')

    setInterval(() => {
        setHours(String(new Date().getHours()))
        setMinutes(String(new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+new Date().getMinutes()))
    }, 1000);
    
    return (
        <p>{hours}:{minutes}</p>
    );
};

export default Time;