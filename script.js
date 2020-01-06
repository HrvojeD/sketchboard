const columns = 40;
const rows = 40;

makeGrid(columns, rows);

function makeGrid(columns, rows) {
    const container = document.getElementById("container");

    const size = columns * rows;
    
    for (var i=0; i<size; i++) {
        const gridItem = document.createElement("div");
        gridItem.setAttribute("class", "gridCell");
        container.appendChild(gridItem);
    }
}