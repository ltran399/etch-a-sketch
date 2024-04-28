

let currentGridSize = 16;

window.onload = function() {
    generateGrid(currentGridSize);
    document.getElementById('black').addEventListener('click', () => {
        setColorMode('black');
    });
    
    document.getElementById('random').addEventListener('click', () => {
        setColorMode('random');
    });

    document.getElementById('color-picker').addEventListener('input', (event) => {
        customColor = event.target.value;
        setColorMode('custom');
    })

    document.getElementById('customColorBtn').addEventListener('click', () => {
        // Toggle the visibility of the color picker
        const picker = document.getElementById('color-picker');
        picker.hidden = !picker.hidden;
        if (!picker.hidden) {
            setColorMode('custom');
        }
    });
    
};
function generateGrid(size) {
    const container = document.getElementById('grid');
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Sets grid layout
    const totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.aspectRatio = "1";
      square.addEventListener('click', (event) => {
        //console.log('Square clicked, current color mode:', colorMode);
        square.style.backgroundColor = getColor();
      });
      container.appendChild(square);
    }
  }
  
  function newGrid() {
    const newSquarePerRow = prompt("Enter the number of squares per row: ");
    if (newSquarePerRow &&!isNaN(newSquarePerRow) && newSquarePerRow > 0) {
      generateGrid(parseInt(newSquarePerRow));
      currentGridSize = newSquarePerRow;
    } 
    else if(newSquarePerRow === null){
        return;
    }
    else {
      alert("Please enter a valid number.");
      newGrid();
    }
  }

  function clearGrid() {
    generateGrid(currentGridSize);
  }


let colorMode = 'black';
let customColor = '#000000';
function setColorMode(mode) {
    colorMode = mode;
    document.getElementById('color-picker').hidden = (mode !== 'custom');
}

function getColor() {
    if(colorMode == 'random'){
        return `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else if(colorMode == 'custom'){
        return customColor;
    }
    return 'black';
}