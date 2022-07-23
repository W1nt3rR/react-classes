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
import Conditional from './components/functional/Conditional';
import Badge from './components/functional/Badge';
import Quiz from './components/functional/Quiz';
import TextInput from './components/functional/TextInput';
import SimpleForm from './components/functional/SimpleForm';
import ToDoList from './components/functional/ToDoList';
import TemperatureConverter from './components/functional/TemperatureConverter';
import SearchMock from './components/functional/SearchMock';
import Composition from './components/functional/Composition';
import MainButton from './components/functional/MainButton';
import MainCheckbox from './components/functional/MainCheckbox';
import Tabs from './components/functional/Tabs';
import TabsExample from './components/functional/TabsExample';

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

    {/* <Calculator></Calculator> */}

    {/* <Conditional extraText="ovo je extra text " extraIcon="neka ikonica " subtitle="lorem ipsum ala lula kola" text="ovo je prvi primer kartice"></Conditional>
    <Conditional type="warning" text="ovo je prvi primer kartice"></Conditional>
    <Conditional type="danger" text="ovo je prvi primer kartice"></Conditional> */}

    {/* <Badge type="badge1"></Badge>
    <Badge type="badge2"></Badge>
    <Badge type="twitter"></Badge> */}

    {/* <Quiz></Quiz> */}

    {/* <TextInput 
      value="nesto" 
      defaultValue="nesto 2" 
      label="Neki label" 
      onChange={(text) => {
        console.log(text);
        // setState
        }
      }>

      </TextInput> */}

      {/* <SimpleForm></SimpleForm> */}

      {/* <ToDoList></ToDoList> */}

      {/* <TemperatureConverter /> */}

      {/* <SearchMock></SearchMock> */}
      
      {/* <Composition left={<SearchMock />} right={<SimpleForm />}>
        <p>text</p>
      </Composition> */}

      {/* <MainButton text="dugme" color="red" radius="xl" size="xs"></MainButton>
      <MainButton text="dugme" color="dark" radius="md" size="sm"></MainButton>
      <MainButton text="dugme" color="light" radius="xs" size="lg"></MainButton>
      <MainButton text="dugme" color="yellow" radius="lg" size="md"></MainButton>
      <MainButton text="dugme" color="red" radius="xl" size="xl"></MainButton>

      <MainCheckbox radius="xl" size="xl" color="dark" text="I agree"/>
      <MainCheckbox radius="sm" size="xs" color="red"/>
      <MainCheckbox radius="md" size="lg" color="yellow" text="I agree to sell myself to Google"/>
      <MainCheckbox radius="lg" size="sm" color="light" text="I agree to join the Italian Mafia"/>
      <MainCheckbox radius="xl" size="md" color="red" text="I agree to sell my privacy"/>
      <MainCheckbox text="I agree to join the Yakuza"/> */}

      {/* <Tabs onChange={(i) => console.log(i)} pages={[
        {
          title: "Page 1",
          content: <p>idk man </p>
        },
        {
          title: "Page 2",
          content: <p>idk man 2</p>
        },
        {
          title: "Page 3",
          content: <p>idk man 3</p>
        },
        {
          title: "Test Tab",
          content: <div>
            <p>Testing tab or something</p>
          </div>
        },
        {
          title: "Page 4",
          content: <div>
            <p>WOOOO</p>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>
          </div>
        }
      ]}
      /> */}

      <TabsExample />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
