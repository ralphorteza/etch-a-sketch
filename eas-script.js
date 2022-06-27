const container = document.querySelector('.container');
const DEFAULT_SIZE = 16;
const btnSize = document.querySelector('.btn-size');

// Creates a 16x16 grid of divs inside 'container' div.
function makeGrid() {
  let gridSize = changeSize(DEFAULT_SIZE);
  for (let i=0; i<gridSize; i++) {
    let row = document.createElement('div');
    row.classList = "row";
    for (let j=0; j<gridSize; j++) {
      const box = document.createElement('div');
      box.classList = "box";
      row.appendChild(box);
    }
    container.appendChild(row);
  }

  
}



function changeColor(event) {
  event.target.style.backgroundColor = "black";
}


btnSize.addEventListener('click', changeSize);
function changeSize(DEFAULT_SIZE) {
  let text;
  let sizePrompt = prompt("Change size to: ", DEFAULT_SIZE.toString());
  sizePrompt = sizePrompt.trim();
  while (parseInt(sizePrompt) > 100 || sizePrompt == null || parseInt(sizePrompt) < 0 || sizePrompt == "") {
    text = "Size must not exceed 100"
    sizePrompt = prompt("Change size to: ", DEFAULT_SIZE.toString());
  }

  return parseInt(sizePrompt);
}



makeGrid();
const gridBoxList = document.querySelectorAll('.box');
gridBoxList.forEach(box => {box.addEventListener("mouseover", changeColor)});
