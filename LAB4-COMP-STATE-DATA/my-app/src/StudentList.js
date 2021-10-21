import React from 'react';
import axios from 'axios';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };

        this.getUsers = this.getUsers.bind(this);
    }

    getUsers() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({ users: res.data });
        })
    }

    componentDidMount() {
        this.getUsers();
    }

    render() { 
        return (<div>
                <AddStudent  refreshUsers = {this.getUsers}/>
                <ul>
                { this.state.users.map((user,id) => (
                    <li key={id}> 
                        { user.name } 
                        <DeleteStudent id={user.id} refreshUsers = {this.getUsers}/> 
                    </li>
                )) }
                </ul>
            </div>)
        
    }
}
 
export default UserList;