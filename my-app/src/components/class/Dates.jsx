import React from 'react';

class Dates extends React.Component {

    constructor (props) {
        super(props);
        // let date = new Date(new Date().setDate(new Date().getDate()-1));
        let oldDate = new Date(2021, 6, 1, 5, 23, 59, 2, 2);
        let currentDate = new Date();
        // oldDate.setSeconds(oldDate.getSeconds() + 1);
        // console.log(date.getTime());
        this.state = {
            currentDate,
            date: oldDate,
            time: 1
        };
        console.log("bruh " + this.state.date);

    }

    timeDifference() {
        // let time = new Date();
        // // let date = this.state.date;
        // console.log(time);
        // let timeYesterday = date.getTime();
        // // console.log("time yesterday" + timeYesterday);

        // return (time - timeYesterday) / 1000;
        return Math.floor((this.state.currentDate - this.state.date) / 1000);
        // return 1;
    }

    //lifecycle methods
    componentDidMount() {
        this.intervalID = setInterval(() => {
            // console.log(this.state.date);
            let newDate = this.state.date;
            newDate.setSeconds(newDate.getSeconds() + 1);
            this.setState({
                ...this.state,
                date: newDate,
                time: this.timeDifference()
            });
        }, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    componentDidUpdate() {
        
    }

    // main lifecycle method
    render() {
        return (
            <div>
                <p>{this.state.currentDate.toUTCString()}</p>
                <p>{this.state.date.toUTCString()}</p>
                <p>{this.state.time}</p>
            </div>
        )
    }
}

export default Dates;