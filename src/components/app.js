import React from "react";
import Board from "./Board";
import Record from "./Record";
import Revolution from "./Revolution";
import "./Board.css";

class App extends React.Component{
	
	state = {
		history:[{squares:Array(9).fill(null)}],
		turn: true,
		stepNumber:0
	}

	squareOnClick = (i)=>{
		const history = this.state.history.slice(0,this.state.stepNumber+1);
		const current = history[history.length-1]; 
		const squares = current.squares.slice();	// copy the squares
				
		if(this.winnerCheck(squares) || squares[i]) {  // check the winner is generated or not!
			return ;
		}
		if(this.state.turn){
			squares[i]= "X";
		} else {
			squares[i]= "O";
		};
		this.setState({
			history:history.concat([{squares:squares}]),
			turn: !this.state.turn,
			stepNumber: history.length
		});
	};

	winnerCheck= (square)=>{			// list the condition to win
		const condition = [
			[0,1,2],[3,4,5],[6,7,8],[0,3,6],
			[1,4,7],[2,5,8],[0,4,8],[2,4,6]
		];
		for (let i=0; i<condition.length; i++){
			const [a,b,c] = condition[i]
			if( square[a]&& square[a]===square[b] && square[a]===square[c]){
				return square[a];
			} 
		};
		return null;
		
	};
	
	jumpTo = (step,shining)=>{		
		this.setState({
			stepNumber: step,
			turn: (step % 2) === 0
		});
		this.removeShining(shining);
	}

	restart = (shining)=>{
		this.setState({
			stepNumber:0,
			turn:true,
			history:[{squares:Array(9).fill(null)}]
		});
		this.removeShining(shining);
	}
	
	showWinner = ()=>{
		const whosturn = document.querySelector(".whosturn");
		whosturn.classList.toggle("shining");	
	}
	
	removeShining=(shining)=>{
		clearInterval(shining);
		if(document.querySelector(".shining")){
			document.querySelector(".shining").classList.remove("shining")
		};
	}
	
	
	render(){
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = this.winnerCheck(current.squares)
		const shining = setInterval(this.showWinner,200);
		
		return(
			<div className="container text-center mx-auto ">
				<h1 className="my-2 title">TIC TAC TOE</h1>
				<div className="row">
					<div className="col-md-7 col-12 px-1 border">
						<h2 className="my-2">Enjoy the Game!</h2>
						<Record player={this.state.turn} winner={winner} restart={this.restart} shining={shining}  />
						<Board  squareOnClick={this.squareOnClick} squares={current.squares} />
					</div>
					<div className="col-md-5  d-none d-md-block px-1 border border-left-0 ">
						<h3 className="my-2">Move Description</h3>
						<Revolution history={history} shining={shining} jumpTo={this.jumpTo}  /> 
					</div>
				</div>
			</div>
		)
	}

};

export default App;