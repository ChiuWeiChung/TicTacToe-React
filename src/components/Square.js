import React from "react";


class Square extends React.Component{
	
	
	render(){
		// console.log(this.props.square);
		return(
			<div className="square col-4" onClick={()=>this.props.squareOnClick()} >{this.props.square} </div>
		)
	}
};

export default Square;


