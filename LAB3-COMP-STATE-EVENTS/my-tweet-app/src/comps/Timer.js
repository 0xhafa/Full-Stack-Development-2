import React from 'react';
import Moment from 'react-moment';  

class Timer extends React.Component {
    constructor() {
        super();
        var today = new Date();
        this.state = {
            currentDate: today
        };
    }
    render() { 
        return <Moment format='hh:mm:ss'>{ this.state.currentDate }</Moment>;
    }
}
 
export default Timer;