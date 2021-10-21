import React from 'react';
import Clock from './Clock';
import moment from 'moment';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
            startTime: '',
            stopTime: '',
            start: 0,
            duration: 0,
            timerLog: []
        }

        this.baseState = this.state

        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleStart() {
        this.setState({
            isOn: true,
            startTime: moment(new Date()).format('HH:mm:ss A'),
            start: Date.now()
        })
        this.timer = setInterval(() => this.setState({
            duration: Date.now() - this.state.start
          }), 1);   
    }

    handleStop() {
        if(this.state.isOn){
            this.setState({
                isOn: false,
                stopTime: moment(new Date()).format('HH:mm:ss A'),
                timerLog: [...this.state.timerLog, this.state.duration]
            })
            clearInterval(this.timer);
        }
    }

    handleReset() {
        this.setState(this.baseState)
    }

    render() { 
        return (
            <div className='container'>
                <table id='timerTable'>
                    <tr>
                        <td>
                            <span>Start Time:</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input id="txtStartTime" type="text" value={this.state.startTime} readOnly/> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>End Time:</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input id="txtEndTime" type="text" value={this.state.stopTime} readOnly/> 
                        </td>
                    </tr>
                        <td>
                            { this.state.isOn? <Clock/> : <></> }
                        </td>
                    <tr>
                        <td>
                            <button id="btnStart" type="button" onClick={this.handleStart}>Start</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="btnStop" type="button"  onClick={this.handleStop}>Stop</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="btnReset" type="button" onClick={this.handleReset}>Reset</button>
                        </td>
                    </tr>

                </table>
                    
                    <>    
                    { this.state.timerLog.map(timerLog => 
                        <label className='container-item'>{ 'Duration => minutes: '+ Math.floor(timerLog /1000 /60) + ' seconds: ' + Math.floor(timerLog /1000) % 60 }</label>
                        ) }
                    </>
 
            </div>


        );
    }
}
 
export default Timer;