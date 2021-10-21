import React, { useState, useEffect } from 'react';
import moment from 'moment';

const FunctionalClock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const handle = setInterval(() =>  setDate(new Date()) , 1000);
        return () => clearInterval(handle);
    })

    return (
        <div>
        <h1>Hello, world!</h1>
        <h2>It is { moment(date).format('HH:mm:ss') }.</h2>
        </div>
    );
}

export default FunctionalClock;