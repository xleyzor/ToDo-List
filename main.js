const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".list-items");
const clearAll = document.querySelector(".clearall");
const addInput = document.querySelector(".add-input");

addBtn.addEventListener("click", addEvent);

addInput.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    addEvent();
  }
});

function addEvent() {
  if (addInput.value != "") {
    let list_Item = document.createElement("div");
    let paragraf = document.createElement("p");
    let deleteSpan = document.createElement("span");
    let check = document.createElement("span");
    deleteSpan.innerHTML = `<lord-icon src="https://cdn.lordicon.com/nhfyhmlt.json" trigger="hover" colors="primary:#00" style="width: 25px; height: 25px"></lord-icon>`;
    check.innerHTML = `<lord-icon src="https://cdn.lordicon.com/egiwmiit.json" trigger="hover" colors="primary:#00" style="width: 25px; height: 25px"></lord-icon>`;
    check.classList.add("check");
    deleteSpan.classList.add("delete");
    list_Item.appendChild(paragraf);
    list_Item.appendChild(deleteSpan);
    list_Item.appendChild(check);
    paragraf.innerHTML = addInput.value;
    list_Item.classList.add("list-item");
    addInput.value = "";
    todoList.appendChild(list_Item);

    check.addEventListener("click", function () {
      list_Item.classList.toggle("checked");
    });

    deleteSpan.addEventListener("click", function () {
      todoList.removeChild(list_Item);
    });

    clearAll.addEventListener("click", function () {
      list_Item.remove();
    });
  }
}
