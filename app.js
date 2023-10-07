const gridContainer = document.querySelector('.grid-container');

function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.innerText = (i + 1);
    cell.className = "grid-item";
    gridContainer.appendChild(cell);

  };

}

makeRows(16, 16);
