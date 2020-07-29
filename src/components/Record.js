import React from "react";


class Record extends React.Component{
	
	
	playerRender = (shining)=>{
		if (this.props.winner){
			return <h2>Winner is {this.props.winner}</h2>
		} else if (this.props.player && !this.props.winner){
			clearInterval(shining);
			return "It's X turn"
		} else if (!this.props.player && !this.props.winner){
			clearInterval(shining);
			return "It's O turn"
		}
	};
	
	render(){
		return(
			<div className="row my-2 mx-auto py-3 justify-content-around align-items-center record-board">
				<div className="whosturn">{this.playerRender(this.props.shining)}</div>
				<button className="btn btn-primary" onClick={()=>this.props.restart(this.props.shining)}>Restart</button>
			</div>
		)
	}
};

export default Record;