// Select color input
// Select size input
const colorPicker = document.getElementById('colorPicker');
const rowsNumber = document.getElementById('inputHeight');
const cellsNumber = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const from = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
from.addEventListener('submit', function(event) {
    event.preventDefault();
    pixelCanvas.innerHTML = '';
    makeGrid();
});

// changing cell color on click
pixelCanvas.addEventListener('click', function(event) {
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = colorPicker.value;
    }
})

// Create table using neasted loop on user input
function makeGrid() {
for (let i = 0; i < rowsNumber.value; i++) {
    const row = pixelCanvas.insertRow(0);
    for (let j = 0; j < cellsNumber.value; j++) {
        row.insertCell(0);
        }
    }


}
