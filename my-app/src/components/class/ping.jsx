import React from 'react';

class Ping extends React.Component {

    constructor (props) {
        super(props);
        this.state = {date: new Date() };
    }

    //lifecycle methods
    componentDidMount() {
        // console.log("mounted");
        
        this.timerID = setInterval(() => {
            // console.log(this.state.date);
            // this.state.date = new Date();
            this.setState({
                ...this.state,
                date: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // main lifecycle method
    render() {
        return (
            <div>
                <p>{this.state.date.toTimeString()}</p>
            </div>
        )
    }
}

export default Ping;