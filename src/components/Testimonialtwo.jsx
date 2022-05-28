import React from "react";

function Testimonialtwo(props) {
  return (
    <section className="slide slide_2" style={{transform:props.translate.translateSlideTwo}}>
      <section className="testimonial">
        <blockquote className="testimonial_text">
          “ I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ”
        </blockquote>
        <h1>Tanya Sinclair</h1>
        <p className="job__role">UX Engineer</p>
      </section>

      <div className="avatar">
        <img src={require("./images/image-tanya.jpg")} alt="Tanya's Picture" />
      </div>
    </section>
  );
}
export default Testimonialtwo;
