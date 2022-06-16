
This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![image](https://user-images.githubusercontent.com/95531716/173982619-08568e62-fd76-42ae-869a-f3555f2a11a9.png)



### Links

- Solution URL: (https://github.com/leoimewore/my-app.git)
- Live Site URL: (https://leoimewore.github.io/my-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library




### What I learned

I learnt more about react- creating props and using react hooks

------React-------
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
------React-------




### Continued development

My next steps involves developing my understanding my understanding of React while still honing my CSS and basic JavaScript skillset. I look forward to learn more about React Hooks and creating React components



### Useful resources

(https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) This helped with deploying my first React JS project after multiple tries
https://reactjs.com   Learnt a lot about the basics of reac



## Author


- Frontend Mentor - [@leoimewore](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@capino48](https://www.twitter.com/yourusername)



## Acknowledgments

Big Thank you to frontendmentor
