# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
![](design/desktop-preview.jpg)
### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](./screenshots/mobile.webp)
![](./screenshots/desktop.webp)

### Links

- Solution URL: [GitHub](https://github.com/TuanAnh45468/expenses-chart-component)
- Live Site URL: [Netlify](https://expenses-chart-component-tuananh.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwindcss](https://tailwindcss.com/) - For styles


### What I learned

In this section I've learned how to create bar chart with dynamic data. Display number when hover (mouseover event)

```css
@layer components {
    .number {
        visibility: hidden;
    }
}
```
```js
const bars = document.querySelectorAll(".bar");
bars.forEach((bar) => {
  bar.addEventListener("mouseover", (event) => {
    const number = event.target.querySelector(".number");
    if (number) {
      number.style.visibility = "visible";
    }
  });

  bar.addEventListener("mouseout", (event) => {
    const number = event.target.querySelector(".number");
    if (number) {
      number.style.visibility = "hidden";
    }
  });
});
```
### Useful resources

- [TailwindCSS cheatsheet](https://tailwindcomponents.com/cheatsheet/) 
## Author

- Website - [Tuan Anh](https://tuananhportfolio.netlify.app/)
- Frontend Mentor - [@Tuananh45468](https://www.frontendmentor.io/profile/Tuananh45468)