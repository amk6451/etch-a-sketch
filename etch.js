const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.classList.add('gridElement');

    cell.innerText = (c + 1);
    container.appendChild(cell);
  };
};

function clearGrid() {

    let containerReset = document.getElementById('container');
    while (containerReset.firstChild) {
        containerReset.removeChild(containerReset.firstChild);
      }
     return main()
    }




function main(){

makeRows(9,9);


const elementReset = document.getElementById("reset");
elementReset.addEventListener("click", clearGrid);

const squares = document.querySelectorAll('.gridElement');


squares.forEach( (option) => {
    option.addEventListener("mousemove", () => {
        option.setAttribute("class", "greyColor");
    }

    );
});

};

main();



 

