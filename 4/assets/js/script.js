const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const caja3 = document.getElementById("caja3");
const caja4 = document.getElementById("caja4");
const caja5 = document.getElementById("caja5");
const caja6 = document.getElementById("caja6");

caja1.addEventListener("click", () => (caja1.style.backgroundColor = "black"));
caja2.addEventListener("click", () => (caja2.style.backgroundColor = "black"));
caja3.addEventListener("click", () => (caja3.style.backgroundColor = "black"));
caja4.addEventListener("click", () => (caja4.style.backgroundColor = "black"));

const pink = "pink";
const orange = "orange";
const lightBlue = "lightblue";
const purple = "purple";
const gray = "gray";
const brown = "brown";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    caja5.style.backgroundColor = pink;
  } else if (event.key === "s") {
    caja5.style.backgroundColor = orange;
  } else if (event.key === "d") {
    caja5.style.backgroundColor = lightBlue;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    caja6.style.backgroundColor = purple;
  } else if (event.key === "w") {
    caja6.style.backgroundColor = gray;
  } else if (event.key === "e") {
    caja6.style.backgroundColor = brown;
  }
});
