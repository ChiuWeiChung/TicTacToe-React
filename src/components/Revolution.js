import React from "react";

class Revolution extends React.Component{
	
	descriptionRender = (history,shining)=>{
	 return	history.map((step,move)=>{
			const desc = move? "Go To #" + move: "Game Start!";
		 	return(
				<li key={move}>
					<button className="btn btn-outline-info my-1 mx-1" onClick={()=>{this.props.jumpTo(move,shining)}} >{desc}</button>
				</li>
			)
		})
	}
	
	
	
	render(){
		const history = this.props.history;
		const shining = this.props.shining;
		return(
			<React.Fragment>
				<ol className="text-left">{this.descriptionRender(history,shining)} </ol>
			</React.Fragment>
			
		)
	}
};

export default Revolution;