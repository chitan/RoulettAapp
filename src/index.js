import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

class Roulette extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: 1,
            isStart: false};
        this.toggleButton = this.toggleButton.bind(this);
    }

    shuffle(){
        var rand = Math.floor(Math.random()*100) + 1;
        this.setState({number: rand});
    }

    startRoulette(){
        this.interval = setInterval(() => this.shuffle(), 50);
    }

    stopRoulette(){
        clearInterval(this.interval);
    }

    toggleButton(){
        if(this.state.isStart){
            this.stopRoulette();
        }else{
            this.startRoulette();
        }
        this.setState((prevState) => ({
            isStart : !prevState.isStart
        }));
    }

    render(){
        return(
            <div>
                <p>number: {this.state.number}</p>
                <button onClick={this.toggleButton}>
                    {this.state.isStart ? 'Stop' : 'Start'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Roulette />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
