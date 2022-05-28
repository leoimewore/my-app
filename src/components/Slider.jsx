import React, { useState } from "react";


function Slider(props) {
  function handleClickPrev() {
    console.log("Login");
    props.setTranslate({
      translateSlideOne: "translateX(-100%)",
      translateSlideTwo: "translateX(0%)",
    });
  }

  return (
    <div> </div>
  );
}

export default Slider;
