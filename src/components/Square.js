import React from 'react';
import ReactDOM from 'react-dom';


export default class Square extends React.Component {
    /*
        React components can have state by setting this.state in the constructor, 
        which should be considered private to the component.
    */
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            //Whenever this.setState is called, an update to the component is scheduled
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                 {this.state.value}
            </button>
        );
    }
}