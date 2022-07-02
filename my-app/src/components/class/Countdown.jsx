import React from 'react';

class Countdown extends React.Component {

    constructor (props) {
        super(props);
        // let randomNumber = Math.floor(Math.random() * 100 + 1);
        this.state = { 
            randomNumber:  Math.floor(Math.random() * 100 + 1)
        };
    }

    //lifecycle methods
    componentDidMount() {
        // console.log("mounted");
        this.randomID = setInterval(() => {
            // this.state.date = new Date();
            // let randomNumber = this.state.randomNumber - 1;
            this.setState({
                randomNumber: this.state.randomNumber - 1,
            });
        }, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.randomID);
    }

    componentDidUpdate() {
        if(this.state.randomNumber === 0) {
            clearInterval(this.randomID);
        }
    }

    // main lifecycle method
    render() {
        return (
            <div>
                <p>{this.state.randomNumber}</p>
            </div>
        )
    }
}

export default Countdown;