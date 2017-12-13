import React from 'react';


// class Square extends React.Component {
//     /*
//         React components can have state by setting this.state in the constructor, 
//         which should be considered private to the component.
//     */
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     value: null,
//         // };
//     }
//     render() {
//         return (
//             //Whenever this.setState is called, an update to the component is scheduled
//             // <button className="square" onClick={() => this.setState({value: 'X'})}>
//             //      {this.state.value}
//             // </button>
//             <button className="square" onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }


export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}