import React from 'react';
import Comment from './Comment';

class TweetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textvalue: '',
            content: []      
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {    
        this.setState({textvalue: event.target.value});  
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState(state => ({
            content: [...state.content, <Comment commentValue = {this.state.textvalue} />],
            value: ''
        }))
        document.querySelector('input').value='';
    }

    render() {
        return (
            <div>
                {this.props.status}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>        
                    <input type="submit" value="Send" />
                </form>
                {this.state.content}
            </div>
        );
    }
}
 
export default TweetContainer;