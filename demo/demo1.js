function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack", "<BR>"], " ");
	element.classList.add('hello');

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => {
    rf.printMe();
    rf.printIndex1();
    rf.printIndex2();
  };

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
