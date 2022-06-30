import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/functional/Card';
import './index.css';
// import App from './components/class/App';
// import AppF from './components/functional/AppF';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*name={{name: "world"}}*/
  <React.StrictMode>

    {/* <App name={{name: "world"}}> 
      <p>I am a child</p>
    </App>

    <AppF name="Ramiz">
      <p>I am child of functional component</p>
    </AppF> */}
    <div style={{display: "flex", flexWrap: "wrap"}}>
      <Card url="https://www.w3schools.com/howto/img_avatar.png" name="John Doe" job="Software Breaker" />
      <Card url="https://www.w3schools.com/howto/img_avatar2.png" name="John Mama" job="Hardware Breaker" />
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
