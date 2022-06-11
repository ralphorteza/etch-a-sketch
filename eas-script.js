const container = document.querySelector('#container');

// Creates a 16x16 grid of divs inside 'container' div.
function makeGrid() {
  for (let i=0; i<16; i++) {
    const row = document.createElement('div');
    row.className = "row-" + i;
    for (let j=0; j<16; j++) {
      const box = document.createElement('div');
      box.className = "box-" + j;
      row.appendChild(box);
    }
    container.appendChild(row);
  }
}

makeGrid();