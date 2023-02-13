var selection = 16;


const container = document.getElementById("container");

function makeGrid(rows, cols) {
//creates grid/column divs and adds to DOM

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.classList.add('gridElement');
    container.appendChild(cell);
  };
};



function clearGrid() {
//removes grid elements under contents is empty
    let containerReset = document.getElementById('container');
    while (containerReset.firstChild) {
        containerReset.removeChild(containerReset.firstChild);
      }
      makeGrid(selection,selection);
    }




function resizeGrid() {
//prompts the user to enter a valid number 1-100, fractions are parsed
//global variable of grid "selection" is updated
      clearGrid();
    newSelection = parseInt(prompt("Enter a valid Number between 1-100", "16"), 10)
    if (isNaN(newSelection)  == true){
      return 
    }

    if(newSelection < 101 && newSelection > 0){
      selection = newSelection;
      return 
    }
    else{
      console.log(newSelection)
      alert("Grid Not updated, please enter a valid entry next time.");
      return
    }
}



function main(){
makeGrid(16,16);



const elementReset = document.getElementById("reset");
const elementResize = document.getElementById("resize");
const squares = document.querySelectorAll('.gridElement');

elementReset.addEventListener("click", clearGrid);
elementResize.addEventListener("click", resizeGrid);


squares.forEach( (option) => {
    option.addEventListener("mousemove", () => {
        option.setAttribute("class", "greyColor");
    }

    );
});
};

main();



 

