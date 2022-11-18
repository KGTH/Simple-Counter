//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Counter from "./component/counter";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let inicio =0; 

setInterval(()=>{ 
     
 const one = Math.floor(inicio/1);
 const two = Math.floor(inicio/10);
 const three = Math.floor(inicio/100);
 const four= Math.floor(inicio/1000);

 console.log(one, two, three, four );


ReactDOM.render( <Home contador={one} contador1={two} contador2={three} contador3={four} />

, document.querySelector("#app"));
inicio++;


},1000);


