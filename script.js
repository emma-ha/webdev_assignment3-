// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
window.onload = one_box;

// Add a row
function addR() {
    let numRows = document.createElement("tr");
    let x = document.createElement("td");
    numRows.appendChild(x);
    grid.children[0].appendChild(numRows);
}

// Add a column
function addC() {
    let numCols = document.createElement("td");
    let x = document.createElement("tr");
    numCols.appendChild(x);
    grid.children[0].appendChild(numCols);
}

// Remove a row
function removeR() {
    let numRows = document.getElementsByTagName('tr');
    size = numRows.length - 1
    let removed = numRows[size];
    if(removed.parentNode)
    {
        removed.parentNode.removeChild(removed);
    }
}

// Remove a column
function removeC() {
    let numCols = document.getElementsByTagName('td');
    size = numCols.length - 1
    let removed = numCols[size];
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
    let color = document.getElementById("selectedColorId").value;
    [...document.querySelectorAll("td")].forEach((all) => {
      if
        (
          all.style.backgroundColor == "")
        all.style.backgroundColor = color;
    });
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
    [...document.querySelectorAll('td')].forEach((all) => {
        all.style.backgroundColor = '#FFFFFF';
      });
}

//Click for color
function one_box() {
    grid.addEventListener("click", function (i) 
    {
      let selected = document.getElementById("selectedColorId").value;
      i.target.style.backgroundColor = selected;
    });
}