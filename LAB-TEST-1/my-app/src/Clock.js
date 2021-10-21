import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clockTime: moment(new Date()).format('HH:mm:ss A')
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        clockTime: moment(new Date()).format('HH:mm:ss A')
      });
    }

    render() {
      return (
        <p className="clock">
          {this.state.clockTime}
        </p>
      );
    }
  }

  export default Clock;