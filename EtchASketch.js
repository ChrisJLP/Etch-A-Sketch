const container = document.querySelector('#container');



for (let i = 0; i < 16; i++) {
    const aDiv = document.createElement('div');
    //aDiv.classList.add('gridRow');
    container.appendChild(aDiv);
    for (j = 0; j < 16; j++) {
        const anotherDiv = document.createElement('div');
        //anotherDiv.textContent="test";
        anotherDiv.classList.add('gridDiv');
        aDiv.appendChild(anotherDiv);
    }
}

