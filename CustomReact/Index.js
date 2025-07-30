function customRender(renderElement, container) {
  const domElement = document.createElement(renderElement.type);
  domElement.innerHTML = renderElement.children;
  // domElement.setAttribute('href', renderElement.props.href);
  // domElement.setAttribute('target', renderElement.props.target);

  //write in moduler way

  for (const prop in renderElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, renderElement.props[prop]);
}
container.appendChild(domElement);
}

const renderElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click this link",
};

const mainContainer = document.getElementById("root");
console.log(mainContainer);

customRender(renderElement, mainContainer);
