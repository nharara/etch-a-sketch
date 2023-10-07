const gridContainer = document.querySelector('.grid-container');

function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.innerText = (c + 1);
    gridContainer.appendChild(cell).className = "grid-item";

  };

}

makeRows(16, 16);
