// import React from "react";


const winnerShow = (props)=>{
	
	
	const winner = document.querySelector(".whosturn");
	const showWinner= setInterval(()=>winner.classList.toggle("shining"),1000);
	return showWinner;

};

export default winnerShow;