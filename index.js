let pixel = document.getElementById("canvas");
let height = document.getElementById("Height");
let width = document.getElementById("Width");
let sizePicker = document.getElementById("size");
let color = document.getElementById("colorChoice");

let draw = false;

color.addEventListener("click", function () { });
color.addEventListener("mousedown", function () { })
// if (!draw) return
// div.style.backgroundColor = color.colorChoice

color.addEventListener("mouseenter", function () { })
color.addEventListener("mouseup", function () { })

sizePicker.onsubmit = function (event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
    for (let i = 0; i < height.value; i++) {
        const row = pixel.insertRow(i);
        for (let j = 0; j < width.value; j++) {
            const cell = row.insertCell(j);
            cell.addEventListener("click", fillSquare);
            cell.addEventListener("mouseenter", fillSquare);

        }
    }
}
makeGrid()
function clearGrid() {
    while (pixel.firstChild) {
        pixel.removeChild(pixel.firstChild);
    }
}


function fillSquare() {
    this.setAttribute("style", `background-color: ${color.value}`);
}