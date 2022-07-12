import React from 'react';
import ReactDOM from 'react-dom/client';
import Countdown from './components/class/Countdown';
import Counter from './components/class/Counter';
import Dates from './components/class/Dates';
import Ping from './components/class/ping';
import PingF from './components/functional/PingF';
import Card from './components/functional/Card';
import Card2 from './components/functional/Card2';
import './index.css';
import App from './components/class/App';
import AppF from './components/functional/AppF';
import reportWebVitals from './reportWebVitals';
import CounterF from './components/functional/CounterF';
import RandomColor from './components/functional/RandomColor';
import Calculator from './components/functional/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <App name={{name: "world"}}> 
      <p>I am a child</p>
    </App>

    <AppF name="Ramiz">
      <p>I am child of functional component</p>
    </AppF> */}

    {/* <div className='cardContainer'>
      <Card url="https://www.w3schools.com/howto/img_avatar.png" name="John Doe" job="Software Breaker" />
      <Card url="https://www.w3schools.com/howto/img_avatar2.png" name="Joe Mama" job="Hardware Breaker" />
    </div>
    <div className='cardContainer'>
      <Card2 url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/934px-Twitter-logo.svg.png" title="TWITTER" text="lorem ipsun ala textus i dont know man more text needed to look profesional maybe a little more"/>
      <Card2 url="https://cdn-icons-png.flaticon.com/512/81/81609.png" title="TWITTER 2.0" text="lorem ipsun ala textus i dont know man more text needed to look profesional maybe a little more"/>
    </div> */}

    {/* <Ping></Ping>
    <PingF></PingF>
    <Countdown></Countdown>
    <Dates></Dates> */}

    {/* <Counter></Counter>
    <CounterF></CounterF>
    <RandomColor></RandomColor> */}

    <Calculator></Calculator>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
