import React from 'react';
import axios from 'axios';


class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => this.setState({name: event.target.value});

    handleSubmit = event => {   
        event.preventDefault();
        axios.post(`https://jsonplaceholder.typicode.com/users`, {name: this.state.name})
             .then(res => {
                    console.log(res.data);
                })
        this.props.refreshUsers(); 
    };
    
    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type='text' value={this.state.name} name='name' onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='Add'/>
                </form>
            </div>
        );
    }
}
 
export default AddStudent;

