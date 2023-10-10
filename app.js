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

const penBtn = document.getElementById('penBtn')
const eraserBtn = document.getElementById('eraserBtn')
const clearBtn = document.getElementById('clearBtn')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')

penBtn.onclick = () => setCurrentMode('pen')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => reloadGrid()
sizeSlider.onmousemove = (event) => updateSizeValue(event.target.value)
sizeSlider.onchange = (event) => changeSize(event.target.value)

function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

function setCurrentSize(newSize) {
  currentSize = newSize
}

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function reloadGrid() {
  clearGrid()
  createGrid(currentSize)
}

function clearGrid() {
  gridContainer.innerHTML = ''
}

function activateButton(newMode) {
  if (currentMode === 'pen') {
    penBtn.classList.remove('active')
  } else if (currentMode === 'eraser') {
    eraserBtn.classList.remove('active')
  }

  if (newMode === 'pen') {
    penBtn.classList.add('active')
  } else if (newMode === 'eraser') {
    eraserBtn.classList.add('active')
  }
}

function createGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add("grid-item");
    cell.addEventListener('mouseover', changeColor)
    cell.addEventListener('mousedown', changeColor)

    gridContainer.appendChild(cell);
  };

}

function changeColor(event) {
  if (currentMode === 'pen' && (event.type === 'mouseover' && isMouseDown)) {
    event.target.style.backgroundColor = currentColor;
    console.log('pen mode')
  } else if (currentMode === 'eraser' && (event.type === 'mouseover' && isMouseDown)) {
    event.target.style.backgroundColor = '#fefefe';
  }

}

window.onload = () => {
  createGrid(DEFAULT_SIZE)
  activateButton(DEFAULT_MODE)
}
