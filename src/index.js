import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const demo = React.createElement("h1", null, "Learn Web Development");
const demo_para = React.createElement("p", null, "Welcome to the MDN Learning area. This set of article is aim to guide complete beginners to web development with all that they need to start coding website.")
const demo_para2 = React.createElement("p", null, "The aim of this area of MDN is not to take you for beginniner to expert but to take you from beginner to comfortable. From there, you should be able to start making your own way, learning from", React.createElement("u", { style: { color: "blue" }}, " the rest of MDN, "), "and other intermediate to advanced resource that assume a lot of previous knowledge.")
const main = React.createElement('main', null, demo, demo_para, demo_para2)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  main,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
