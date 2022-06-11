const container = document.querySelector('.container');

// Creates a 16x16 grid of divs inside 'container' div.
function makeGrid() {
  for (let i=0; i<16; i++) {
    let row = document.createElement('div');
    row.classList = "row";
    for (let j=0; j<16; j++) {
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

makeGrid();
const gridBoxList = document.querySelectorAll('.box');
gridBoxList.forEach(box => {box.addEventListener("mouseover", changeColor)});
