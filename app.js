const gridContainer = document.querySelector('.grid-container');

const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'pen'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

let isMouseDown = false
document.body.addEventListener('mousedown', () => (isMouseDown = true))
document.body.addEventListener('mouseup', () => (isMouseDown = false))


function createGrid(rows, cols) {
  gridContainer.style.gridTemplateColumns = 'repeat${size}, 1fr';
  gridContainer.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.className = "grid-item";
    cell.addEventListener('mouseover', changeColor)
    cell.addEventListener('mousedown', changeColor)

    gridContainer.appendChild(cell);
  };

}

function changeColor(event) {
  if (currentMode === 'pen' && (event.type === 'mouseover' && isMouseDown)) {
    event.target.style.backgroundColor = currentColor;
  } else if (currentMode === 'eraser' && (event.type === 'mouseover' && isMouseDown)) {
    event.target.style.backgroundColor = '#fefefe';
  }

}



createGrid(16, 16);
