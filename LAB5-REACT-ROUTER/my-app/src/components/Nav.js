import React from 'react';
import { Route, Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() { 
        return (
            <div>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                    <Link to="/student/Rafa" >Student: Rafa</Link>
                    </li>
                    <li>
                    <Link to="/student/Rafa/55555" >Student: Rafa no: 55555</Link>
                    </li>
                    <li>
                    <Link to="/redirect" >Redirect</Link>
                    </li>
                </ul>
                
                
            </div>
        );
    }
}
 
export default Navigation;