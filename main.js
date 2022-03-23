const ListItems = document.querySelectorAll("ol li"),
  addStrikethrough = function (X) {
    X.target.style.textDecoration = "line-through";
  };
for (const X of ListItems) X.addEventListener("click", addStrikethrough);
const nextListItems = document.querySelectorAll("ul li"),
  fade = function (X) {
    X.target.style.opacity = 0;
  };
for (const X of nextListItems) X.addEventListener("click", fade);
const pictures = document.querySelectorAll("#row img"),
  shrink = function (X) {
    X.target.style.width = "0px";
  };
for (const X of pictures) X.addEventListener("click", shrink);
const meteoro = document.querySelector("#destroy-all"),
  destroyEverything = function () {
    for (const X of ListItems) X.style.textDecoration = "line-through";
    for (const X of nextListItems) X.style.opacity = 0;
    for (const X of pictures) X.style.width = "0px";
  };
meteoro.addEventListener("click", destroyEverything);
