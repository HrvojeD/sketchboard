const columns = 30;
const rows = 30;
blackRadio.checked = true;

makeGrid(columns, rows);

function makeGrid(columns, rows) {
    const container = document.getElementById("container");

    const size = columns * rows;
    
    for (var i=0; i<size; i++) {
        const gridItem = document.createElement("div");
        gridItem.setAttribute("class", "gridCell");
        gridItem.setAttribute("onmouseover", "onMouseOver(this)")
        container.appendChild(gridItem);
    }
}

function onMouseOver(gridItem) {
    const blackRadio = document.getElementById("blackRadio");
    const rainbowRadio = document.getElementById("rainbowRadio");

    if (blackRadio.checked) {
        gridItem.style.backgroundColor = "black";
    }

    if (rainbowRadio.checked) {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);

        gridItem.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
    
}

function resetGrid() {
    const gridCells = document.querySelectorAll(".gridCell");
    gridCells.forEach(element => {
            element.style.backgroundColor = "white"
   });
}