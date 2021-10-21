import React from 'react';
import Courses from './Courses';

const Student = (props) => {
    return (
        <p> Student <b>{ props.name }</b> with student <b>{ props.number }</b> <Courses enrolled = { props.enrolled }/></p>
    );
}
 
export default Student;