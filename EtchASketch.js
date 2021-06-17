const container = document.querySelector('#container');

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const aDiv = document.createElement('div');
    aDiv.classList.add('gridRow');
    container.appendChild(aDiv);
    for (j = 0; j < gridSize; j++) {
        const anotherDiv = document.createElement('div');
        anotherDiv.classList.add('gridDiv');
        aDiv.appendChild(anotherDiv);
    }
}

const squares = document.querySelectorAll('.gridDiv');
console.log(squares);

squares.forEach((square) => {
    square.style.minHeight = `${(100 / gridSize)}%`; //change the min height of each square depending on amount of squares
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
});

const rows = document.querySelectorAll('.gridRow');

rows.forEach((row) => {
    row.style.minWidth = `${(100 / gridSize)}%`;
})