const container = document.querySelector('.container');
const DEFAULT_SIZE = 16;
let size = DEFAULT_SIZE;
const btnSize = document.querySelector('.btn-size');
const btnClear = document.querySelector('.btn-clear');

// Creates a 16x16 grid of divs inside 'container' div.
function makeGrid(DEFAULT_SIZE) {
  
  for (let i=0; i<DEFAULT_SIZE; i++) {
    let row = document.createElement('div');
    row.classList = "row";
    for (let j=0; j<DEFAULT_SIZE; j++) {
      const box = document.createElement('div');
      box.classList = "box";
      row.appendChild(box);
    }
    container.appendChild(row);
  }

  const gridBoxList = document.querySelectorAll('.box');
  gridBoxList.forEach(box => {box.addEventListener("mouseover", changeColor)});

  
}



function changeColor(event) {
  event.target.style.backgroundColor = "black";
}



function changeSize(DEFAULT_SIZE) {
  let text;
  let sizePrompt = prompt("Change size to: ", DEFAULT_SIZE.toString());
  sizePrompt = sizePrompt.trim();
  sizePrompt = parseInt(sizePrompt);
  while (sizePrompt > 100 || sizePrompt == null || sizePrompt < 0 || sizePrompt == "") {
    text = "Size must not exceed 100"
    sizePrompt = prompt("Change size to: ", DEFAULT_SIZE.toString());
    sizePrompt = parseInt(sizePrompt.trim());
  }
  size = sizePrompt;
  clearGrid();
}

function clearGrid() {
  let getSize = size;
  while (container.firstChild) {
    container.firstChild.remove();
  } 
  makeGrid(getSize);
}






makeGrid(DEFAULT_SIZE);
btnSize.addEventListener('click', changeSize);
btnClear.addEventListener('click', clearGrid);

