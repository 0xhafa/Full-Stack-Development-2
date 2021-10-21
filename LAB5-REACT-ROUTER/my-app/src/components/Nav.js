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
                    <Link to="/student/:studentname/:studentno?" >Student</Link>
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