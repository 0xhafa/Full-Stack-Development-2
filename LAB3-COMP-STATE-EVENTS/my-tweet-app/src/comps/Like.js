import React from 'react';

class Like extends React.Component {
    constructor() {
        super();
        this.state = {
            likes: 0
        };
        this.handleLikeCount = this.handleLikeCount.bind(this);
    };

    handleLikeCount = () => {
        this.setState({
            likes:  this.state.likes +1
        })
    }

    render() { 
        return (
            <div>
              <button onClick = {this.handleLikeCount}>Like</button> {this.state.likes + ' Likes'} 
            </div>
        ) 
    }
}
 
export default Like;