import _ from "lodash";
import "./style.css";
import "./style.scss";
import printMe from "./print.js";
import printIndex1 from "./index/index1.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack", "<BR>"], " ");
	element.classList.add('hello');

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => {
    printMe();
    printIndex1();
  };

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
