const h1 = document.querySelector("h1");
h1.onmouseover = function () {
  h1.style.color = "red";
  h1.style.fontWeight = "300";

  console.log("onmouseover");
};

h1.onmouseout = () => {
  h1.style.color = "black";
  h1.style.fontWeight = "900";
};

//? add Event Listener
h1.addEventListener("click", () => {
  alert("h1 pressed");
});

document.getElementById("btn").addEventListener("click", () => {
  const input = document.querySelector("#input");

  if (!input.value) {
    alert("Please enter an item");
  } else {
    alert(`${input.value} entered`);
  }
});

const list = document.querySelectorAll(".list"); // nodeList
// console.log(list);
list.forEach((li) => {
  li.style.transition = "all 0.8s";
  li.style.lineHeight = "2rem";

  li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transform = "translateX(10px)";
    li.style.color = "green";
  };
  li.onmouseout = () => {
    li.style.fontSize = "1rem";
    li.style.transform = "translateX(-10px)";
    li.style.color = "black";
  };
});

window.onload = () => {
  document.querySelector("#input").focus();
};

const print = () => {
  console.log("Starting");
};
print();
