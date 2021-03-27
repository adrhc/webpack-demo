import _ from "lodash";
import "./style.css";
import "./sass-style.scss";
import printMe from "./index/print.js";
import printIndex1 from "./index/index1.js";
import printIndex2 from "./index/index2.js";

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
    printIndex2();
  };

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
