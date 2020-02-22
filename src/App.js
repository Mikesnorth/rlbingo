import React from 'react';
import Main from './components/main';
import bg from './components/images/bg.png';


function App() {
  return (
    <div>
        <img src={bg} style={bgStyle} alt="car ball" />
        <Main />

    </div>
  );
}


const bgStyle = {
  minHeight: "100%",
  minWidth: "1024px",
  width: "100%",
  heigth: "auto",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "-2"
}
export default App;
