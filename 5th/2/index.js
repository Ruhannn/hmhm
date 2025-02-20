let mainText = document.getElementById("text").innerText;
  let schText = "I am Kamiru";
  function changeText(element) {
    return function() {
      text = !text;
      element.textContent = text ? mainText : schText;
    };
  }
  const Button = document.getElementById("btn");
  const Element = document.getElementById("text");
  const toggleText = changeText(Element);
  Button.addEventListener("click", toggleText);