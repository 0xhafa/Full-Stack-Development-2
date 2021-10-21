import React from 'react';
import axios from 'axios';

class DeleteStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = event => {
        this.setState(
            {id : event.target.value}
        )
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
            .then(res => {
                console.log(res);
        })
        this.props.refreshUsers(); 
    };
    
    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='submit' value='Delete'/>
                </form>
            </div>
        );
    }
}
 
export default DeleteStudent;