import React from 'react';
import './App.css';
import Student from './Student';
import College from './College';

class App extends React.Component {
  render() { 
    return (
      <React.Fragment>
        <Student name ='Foo' number ='111' enrolled= '1'/>
        <Student name ='Buzz' number ='222' enrolled = '2'/>
        <Student name ='Fizz' number ='333' enrolled = '3'/>
        <College name = 'GB' location = 'Casa Loma' />
      </React.Fragment>
    );
  }
}
 
export default App;