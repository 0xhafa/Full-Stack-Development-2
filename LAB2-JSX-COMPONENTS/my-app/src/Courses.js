import React from 'react';

const Courses = (props) => {

    let enrolled = props.enrolled  ;
    let output = [];

    for(let i = 0; i < enrolled ; i++) {
      output.push(<p> Course { i }</p>)
    }

    return (<p>Student is enrolled in { output }</p> );
}
 
export default Courses;