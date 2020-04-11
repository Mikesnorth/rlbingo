import React from 'react';
import Main from './components/main';
import bg from './components/images/bg.png';
import bgvid from './components/images/dropshotbg.mp4';


function App() {
  return (
    <div>
        <video autoPlay="true" loop="true" muted="true" id="bgVid">
            <source src={bgvid} type="video/mp4" />
        </video>
        <Main />

    </div>
  );
}

// for image (if in use)
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
