const container = document.getElementById("container");
const elementReset = document.getElementById("reset");
const elementResize = document.getElementById("resize");
const elementGrey = document.getElementById("grey-button");
const elementRGB = document.getElementById("rgb-button");


elementReset.addEventListener("click", function() {
    clearGrid();
    makeGrid(dimension);
});
elementResize.addEventListener("click", resizeGrid);
elementGrey.addEventListener("click", updateGrey);
elementRGB.addEventListener("click", updateRGB);

//global variables
var dimension = 16;
var colorScheme = 0;

//initializes grid to 16x16 grid
makeGrid(dimension);

function makeGrid(dimension) {
    //creates a grid of divs by the input dimensions: row x column
      container.style.setProperty('--grid-rows', dimension);
      container.style.setProperty('--grid-cols', dimension);
      for (c = 0; c < (dimension * dimension); c++) {

        let cell = document.createElement("div");
        cell.classList.add('gridElement');
        
        cell.addEventListener("mouseout", () => {
            
            if (colorScheme ==0){
                cell.style.background = "grey";
            }
            if (colorScheme ==1){
                cell.style.background = generateRGB();  
            }
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

     //user provides valid input
    if(newSelection < 101 && newSelection > 0){
      selection = newSelection;

      clearGrid();
      makeGrid(selection);
      return 
    }

    //parseInt outputs NaN => no changes are applied
    else{
      return
    }
}

function generateRGB(){

let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let r = randomBetween(0, 255);
let  g = randomBetween(0, 255);
let  b = randomBetween(0, 255);
let  rgbValue = `rgb(${r},${g},${b})`; // Collect all to a css color string
return rgbValue
}

function updateGrey() {
    colorScheme = 0;
}

function updateRGB() {
    colorScheme = 1;
}