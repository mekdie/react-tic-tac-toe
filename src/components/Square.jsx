import React from "react";
import { useState } from "react";

// class Square extends React.Component {
//     render() {
//         return <button className="square"> {this.props.value}</button>;
//     }
// }
// const btnClick = () => {
//     console.log("click");
// };
const Square = (props) => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
};

export default Square;
