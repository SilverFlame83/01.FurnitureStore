window.addEventListener("load", solve);

function solve() {
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const descriptionInput = document.getElementById("description");
  const price = document.getElementById("price");
  const furnitureList = document.getElementById("furniture-list");
  const addBtn = document.getElementById("add");

  addBtn.addEventListener("click", onAdd);

  function onAdd() {
    let priceNum = Number(price.value);
    if (
      modelInput.value === "" ||
      yearInput.value === "" ||
      descriptionInput.value === "" ||
      priceNum > 0
    ) {
      return;
    }

    console.log(
      modelInput.value,
      yearInput.value,
      descriptionInput.value,
      priceNum
    );
    function elManager(type, txtContent, className) {
      const el = document.createElement(type);
      if (txtContent) {
        el.textContent = txtContent;
      }
      if (className) {
        el.className = className;
      }

      return el;
    }

    function append(main, ...arg) {
      while (arg.length) {
        main.appendChild(arg.shift());
      }
      return main;
    }
  }
}
