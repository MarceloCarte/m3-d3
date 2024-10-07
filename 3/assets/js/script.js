const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";

const colorBkg = (color) => {
  ele.style.backgroundColor = color;
};
ele.addEventListener("click", () => {
  colorBkg("yellow");
});
