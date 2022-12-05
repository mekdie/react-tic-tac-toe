import React from "react";

// class Square extends React.Component {
//     render() {
//         return <button className="square"> {this.props.value}</button>;
//     }
// }
// const btnClick = () => {
//     console.log("click");
// };

const winnerSquare = {
    backgroundColor: "yellow",
};

const Square = ({ onClick, value, winnings, index }) => {
    return (
        <button
            // to check if the winnings array have the value that caused the win, if yes highlight the square
            style={winnings.includes(index) ? winnerSquare : {}}
            className="square"
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Square;
