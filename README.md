# Frontend Mentor - Invoice app solution

This is a solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![](https://raw.githubusercontent.com/agrajy10/invoice-app/master/screenshots/Screenshot_1.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/invoice-app-using-react-js-and-styled-components-Oj5-YSNaX)
- Live Site URL: [Add live site URL here](https://invoice-app-react.netlify.app/)

## My process

At the beginning of the project, first I outlined all the components of the app and then created static version of the app in reactjs.
After static version, moved on to global and local state of the app and components. For state management I've am using react context API and reducer.
I followed mobile-first approach to style the app, faced difficulty while trying to reorder items in invoice card for desktop view but sorted out with
use of grid-template-area property in CSS.
To keep track of changes done by user I am using localStorage.

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first approach
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Formik](https://formik.org/) - Form
- [Yup](https://github.com/jquense/yup) - Form validation
- [Headless UI](https://headlessui.dev/) - Accessible components
- [React Router](https://reactrouter.com/) - Routing
- [React Date picker](https://reactdatepicker.com/) - Form date picker

### What I learned

-Got to practice react contextAPI and reducer for state management.
-Learned more about Formik and Yup for validation.
-Learned how to add/remove form fields dynamically.
-Applied grid-template-areas property while using CSS grid.
-Learned how to implement light/dark mode through styled-components.

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

## Author

- Frontend Mentor - [@agrajy10](https://www.frontendmentor.io/profile/agrajy10)
