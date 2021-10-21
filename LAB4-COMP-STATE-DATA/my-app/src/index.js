import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

fetch('https://api.github.com/emojis')
  .then(resolve => resolve.json())
  .then(resolve => {
      const emojis = document.getElementById('emojis');
      
      for(let url of Object.values(resolve)) {
        let img = document.createElement('img');
        img.src = url;
        emojis.appendChild(img);
      }
  })
  .catch(reject => {
      console.log(reject);
  })