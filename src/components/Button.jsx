import React from "react";

function Button(props) {
  function handleClickNext() {
    props.setTranslate({
      translateSlideOne: "translateX(0%)",
      translateSlideTwo: "translateX(100%)",
    });
  }

  function handleClickPrev() {
    props.setTranslate({
      translateSlideOne: "translateX(-100%)",
      translateSlideTwo: "translateX(0%)",
    });
    console.log(props.translate.translateSlideOne);
  }

  return (
    <div className="btn_wrapper">
      <div onClick={handleClickNext} className="next"></div>
      <div onClick={handleClickPrev} className="prev"></div>
    </div>
  );
}

export default Button;
