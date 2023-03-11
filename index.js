const genColorNumber = () => {
  return Math.floor(Math.random() * 255);
};

const generateColor = () => {
  let red, green, blue;
  red = genColorNumber();
  green = genColorNumber();
  blue = genColorNumber();
  let colorString = `rgb(${red}, ${green}, ${blue})`;
  color.textContent = colorString;
  document.body.style.background = colorString;
  console.log("la");
};

setInterval(generateColor, 2500);
