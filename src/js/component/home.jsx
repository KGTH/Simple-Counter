import React from "react";

//include images into your bundle


import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = (props) => {
	return (
		         
		<div className="container">
		<div className="counter ">
	  <div className="six "><i class="fas fa-clock "></i></div>
	  <div className="five">{props.contador5}</div>
	  <div className="four ">{props.contador4}</div>
	  <div className="three">{props.contador3}</div>
	  <div className="dos">{props.contador2}</div>
	  <div className="uno ">{props.contador1}</div>
	  <div className="cero">{props.contador}</div>
	  </div>
	  
	  </div>
	);
};

export default Home;
