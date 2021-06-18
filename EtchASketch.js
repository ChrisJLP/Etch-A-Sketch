const container = document.querySelector('#container');

let gridSize = 16;
let squares;
let rows;
createGrid(gridSize);
updateGridVariables();
startListening();
styleGrid();

function createGrid(size) { 
    for (let i = 0; i < size; i++) {
        const aDiv = document.createElement('div');
        aDiv.classList.add('gridRow');
        container.appendChild(aDiv);
        for (j = 0; j < size; j++) {
            const anotherDiv = document.createElement('div');
            anotherDiv.classList.add('gridDiv');
            aDiv.appendChild(anotherDiv);
        }
    }
}

function updateGridVariables() {
    squares = document.querySelectorAll('.gridDiv');
    rows = document.querySelectorAll('.gridRow');
}

function startListening() {
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
}

function styleGrid() {
    rows.forEach((row) => {
        row.style.minWidth = `${(100 / gridSize)}%`; //change the min width of each square depending on the grid size
    })
    squares.forEach((square) => {
        square.style.minHeight = `${(100 / gridSize)}%`; //change the min height of each square depending on the grid size
    })
}

function clearGrid() {
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
}

function removeGrid() {
    squares.forEach((square) => {
        square.remove();
    }),
    rows.forEach((row) => {
        row.remove();
    })
}

function changeGridSize() {
    gridSize = prompt("What size grid would you like? (max 100)", 16);
    if (gridSize < 1 || gridSize > 100) {
        gridSize = 16;
    } 
    if (isNaN(Number(gridSize))) {
        gridSize = 16;
    }

    removeGrid();
    createGrid(gridSize);
    updateGridVariables();
    styleGrid();
    startListening();
}

document.querySelector('.clear').addEventListener('click', clearGrid); //event listener for clear grid button

document.querySelector('.gridSize').addEventListener('click', () => { //event listener for change grid size button
    changeGridSize();
})

