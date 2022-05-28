import React from "react";

function Testimonialone(props) {
 


  return (
    <section className="slide slide_1" style={{transform:props.translate.translateSlideOne}}>
      <section className="testimonial">
        <blockquote className="testimonial_text">
          “ If you want to lay the best foundation possible I’d recommend taking
          this course. The depth the instructors go into is incredible. I now
          feel so confident about starting up as a professional developer. ”
        </blockquote>
        <h1>John Tarkpor</h1>
        <p className="job__role">Junior Front-end Developer</p>
      </section>
      <div className="avatar">
        <img src={require("./images/image-john.jpg")} alt="Avatar" />
      </div>
    </section>
  );
}

export default Testimonialone;
