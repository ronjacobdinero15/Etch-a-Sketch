const gridContainer = document.querySelector('#gridContainer');
const random_btn = document.querySelector('#random_btn');
const input_btn = document.querySelector('#input_btn');
const clear_btn = document.querySelector('#clear_btn');
const color_btn = document.querySelector('#color_btn');
const footer = document.querySelector('footer');

function makeGrid(inputNum) {
    gridContainer.style.gridTemplateColumns = `repeat(${inputNum}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${inputNum}, 1fr)`;

    for(i = 0; i < inputNum * inputNum; i++) {
         let gridCell = document.createElement('div');
         gridCell.classList.add('gridCell');
         gridContainer.appendChild(gridCell);
    }
}
function resetGrid() {
    let gridCell = document.querySelectorAll('.gridCell');
    gridCell.forEach(cell => {
        cell.remove();
    });
}
function clearInput() {
    document.querySelector('input').value = '';
}
function populateGrid() {
    let input = document.querySelector('input').value;
    if(isNaN(input) || input == '') {
        alert('Not a number');
        clearInput();
    } else if(input >= 8 && input <= 64) {
        resetGrid();
        clearInput();
        makeGrid(input);
        footer.textContent = `${input} x ${input}`;
    } else {
        alert('Numbers between 8 and 64 only');
        clearInput();
    }
}
function clearGrid() {
    let gridCell = document.querySelectorAll('.gridCell');
    gridCell.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    })
}
function colorGrid() {
    let gridCell = document.querySelectorAll('.gridCell');
    gridCell.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'rgb(51, 51, 51)';
        })
    })
}
function generateRandomColor() {
    const symbols = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}
function applyRandomColor() {
    let gridCell = document.querySelectorAll('.gridCell');
    gridCell.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = generateRandomColor();
        })
    })
}
clear_btn.addEventListener('click', clearGrid);
input_btn.addEventListener('click', populateGrid);
color_btn.addEventListener('click', colorGrid);
random_btn.addEventListener('click', applyRandomColor);