import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeter from './Greeter';
import LikeButton from './LikeButton';

const Display = () => {
  let Likes = [];
  for(let i=0; i<10; i++) {
    Likes.push(<LikeButton />);
  }
  return (
    <React.Fragment>
      <Greeter />
      { Likes }
    </React.Fragment>
  );
}

ReactDOM.render(
<Display />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
