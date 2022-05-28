import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import Testimonialone from "./Testimonialone";
import Testimonialtwo from "./Testimonialtwo";



function App() {


const [translate,setTranslate]= useState({translateSlideOne:"translateX(0%)",
translateSlideTwo:"translateX(100%)"})






  return (
    <main className="container">
      <section className="slider">
        <Testimonialone translate={translate} setTranslate={setTranslate}/>
        <Button translate={translate} setTranslate={setTranslate}/>
        <Testimonialtwo translate={translate} setTranslate={setTranslate}/>
      </section>
    </main>
  );
}

export default App;
