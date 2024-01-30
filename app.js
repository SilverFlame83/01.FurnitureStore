window.addEventListener("load", solve);

function solve() {
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const descriptionInput = document.getElementById("description");
  const price = document.getElementById("price");
  const furnitureList = document.getElementById("furniture-list");
  const addBtn = document.getElementById("add");

  addBtn.addEventListener("click", onAdd);

  function onAdd(event) {
    event.preventDefault();
    let priceNum = Number(price.value);
    if (
      modelInput.value === "" ||
      yearInput.value === "" ||
      descriptionInput.value === "" ||
      priceNum < 0
    ) {
      return;
    }

    console.log(
      modelInput.value,
      yearInput.value,
      descriptionInput.value,
      priceNum.toFixed(2)
    );
    const info = elManager("tr", null, "info");
    const model = elManager("td", `${modelInput.value}`);
    const priceTd = elManager("td", `${priceNum.toFixed(2)}`);
    const moreBtn = elManager("button", "More Info", "moreBtn");
    const buyBtn = elManager("button", "Buy it", "buyBtn");
    const hideTr = elManager("tr", null, "hide");
    const tdYear = elManager("td", `Year: ${yearInput.value}`);
    const tdDescription = document.createElement("td");
    tdDescription.setAttribute("colspan", "3");
    tdDescription.textContent = `Description ${descriptionInput.value}`;
    const buttonTd = elManager('td');

    append(buttonTd, moreBtn, buyBtn);
    append(info, model, priceTd, buttonTd);
    append(hideTr, tdYear, tdDescription);
    append(furnitureList, info, hideTr);

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
