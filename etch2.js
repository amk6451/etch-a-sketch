
const container = document.getElementById("container");
const elementReset = document.getElementById("reset");
const elementResize = document.getElementById("resize");

elementReset.addEventListener("click", function() {
    clearGrid();
    makeGrid(dimension);
});
elementResize.addEventListener("click", resizeGrid);
//global variable
var dimension = 16;


//initializes grid to 16x16 grid
makeGrid(dimension);

function makeGrid(dimension) {
    //creates a grid of divs by the input dimensions: row x column
      container.style.setProperty('--grid-rows', dimension);
      container.style.setProperty('--grid-cols', dimension);
      for (c = 0; c < (dimension * dimension); c++) {
        let cell = document.createElement("div");
        cell.classList.add('gridElement');
        cell.addEventListener("mousemove", () => {
            cell.setAttribute("class", "greyColor");
        });
        container.appendChild(cell);
      };
    };

function clearGrid() {
//removes all div elements under id container are removed
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }


function resizeGrid() {
    newSelection = parseInt(prompt("Enter a valid Number between 1-100", "16"), 10)

    //user presses cancel
    if (isNaN(newSelection)  == true){
      return 
    }

     //user provides valid input
    if(newSelection < 101 && newSelection > 0){
      selection = newSelection;

      clearGrid();
      makeGrid(selection);
      return 
    }

     //error input
    else{
      alert("Grid Not updated, please enter a valid entry next time.");
      return
    }
}
    
