import React from "react";


function App() {

  let currDate = new Date();
  currDate = currDate.getHours();

  let greeting = " ";
  const cssStyle = {}

  if (currDate > 1 && currDate < 12){
    greeting = "Good Morning!🌄";
    cssStyle.color = "green";

  }else if (currDate >= 12 && currDate <= 16){
    greeting = "Good Afternoon!☀️"
    cssStyle.color = "orange";

  }else if (currDate > 16 && currDate <= 20){
    greeting = "Good Evening!🌃"
    cssStyle.color = "blue";

  }else if ( currDate >=20 && currDate < 24){
    greeting = "Good Night!🌝"
    cssStyle.color = "grey";

  }


  return (
    <>
    <div id="main">
      <div id="sub">
        <span id="shadow"><h1>Hello <span style={cssStyle}>{greeting}</span></h1></span>
      </div>
      </div>
    </>
    
  );
}

export default App;
