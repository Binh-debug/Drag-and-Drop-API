const lists = document.querySelectorAll(".list");
const items = document.querySelectorAll(".item");
let itemSelected = null;
for (let i = 0; i < items.length; i++) {
  let item = items[i];

  item.addEventListener("dragstart", function () {
    setTimeout(function () {
      itemSelected = item;
      item.style.display = "none";
    }, 50);
  });

  item.addEventListener("dragend", function () {
    setTimeout(function () {
      item.style.display = "block";
      itemSelected = null;
    }, 50);
  });

  lists.forEach(function (list) {
    list.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
      list.classList.add("bgc-drag");
    });
    list.addEventListener("dragleave", function () {
      list.classList.remove("bgc-drag");
    });
    list.addEventListener("drop", function () {
      list.append(itemSelected);
      list.classList.remove("bgc-drag");
    });
  });
}
