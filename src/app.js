/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const element = document.querySelector("#excuse");
  element.innerText = randomExcuse();
};

function randomExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  return `${who[Math.floor(Math.random() * who.lenght)]} 
${action[Math.floor(Math.random() * action.lenght)]} 
${what[Math.floor(Math.random() * what.lenght)]} 
${when[Math.floor(Math.random() * when.lenght)]}`;
}
