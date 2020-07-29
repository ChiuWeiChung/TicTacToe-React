import React from "react";
import Square from "./Square";

class Board extends React.Component{
		
	renderSquare = (i)=>{
		return(
			<Square square={this.props.squares[i]} squareOnClick={()=>{this.props.squareOnClick(i)}}  /> 
		)
	};
	
	render(){
		// console.log(this.props.squares[0]);
		return(
			<div className="gameboard  mx-auto ">
				<div className="row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
								
			</div>
		)
	}
};

export default Board; 