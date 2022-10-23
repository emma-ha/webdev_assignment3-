// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let row = document.createElement("tr");
    let x = document.createElement("td");
    row.appendChild(x);
    grid.children[0].appendChild(row);
}

// Add a column
function addC() {
    let column = document.createElement("td");
    let x = document.createElement("tr");
    column.appendChild(x);
    grid.children[0].appendChild(column);
}

// Remove a row
function removeR() {
    let row = document.getElementsByTagName("tr");
    size = row.length - 1
    let removed = row[size];
    if(removed.parentNode)
    {
        removed.parentNode.removeChild(removed);
    }
}

// Remove a column
function removeC() {
    let column = document.getElementsByTagName("td");
    size = column.length - 1
    let removed = column[size];
    if(removed.parentNode)
    {
        removed.parentNode.removeChild(removed);
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    [...document.querySelectorAll('td')].forEach((all) => {
        let color = document.getElementById('selectedColorId').value;
        all.style.backgroundColor = color;
      });
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}